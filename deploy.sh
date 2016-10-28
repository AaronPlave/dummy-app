#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

function doCompile {
  npm run build
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy of PRs and non-master branches"
    exit 0
fi

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into out/
# Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deply)
git clone $REPO out
cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

ls

# Clean out existing contents
rm -rf out/**/* || exit 0

echo "Out should be clean"
ls out

# Run our compile script
doCompile

echo "Dist should have stuff"
ls
ls dist

# Rename our dist folder to out since dist is in .gitignore
mv dist/* out/

echo "Dist should be in out"
ls out

# Now let's go have some fun with the cloned repo
cd out
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
# if [ -z `git diff --exit-code` ]; then
# if git diff --quiet ; then
#     echo "No changes to the output on this push; exiting."
#     exit 0
# fi

# Add CNAME for deploy
echo "dummy-app.aaronplave.com" > CNAME

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"

echo "Changes should be committed"
git status
ls


# Get the deploy key by using Travis's stored variables to decrypt id_travis.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ../id_travis.enc -out id_travis -d
chmod 600 id_travis
eval `ssh-agent -s`
ssh-add id_travis

# Now that we're all set up, we can push.
git push --force --quiet $SSH_REPO $TARGET_BRANCH