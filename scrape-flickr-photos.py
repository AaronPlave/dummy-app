import urllib2
import json

# Get photos
request = urllib2.urlopen("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0412d3495604ac32c3ada71d433053f7&photoset_id=72157633359968647&user_id=71688597%40N05&format=json&nojsoncallback=1&api_sig=835a02a280aa1f2f223ff6938475f95b")
obj = json.load(request)

# Check status
if obj["stat"] != "ok":
	print "Request failed", obj["stat"], obj
	exit()

photoset = obj["photoset"]
photos = [];
# Get photos (just first 500, don't need rest)
for i in photoset["photo"]:
	url = "https://farm{farmid}.staticflickr.com/{serverid}/{id}_{secret}.jpg".format(farmid=i["farm"], serverid=i["server"], id=i["id"], secret=i["secret"])
	photos.append(url)

print photos

out = file('test.json','w')
out.write(json.dumps(photos))
out.close()