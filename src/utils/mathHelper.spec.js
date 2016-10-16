import chai from 'chai';
import MathHelper from './mathHelper';

chai.should();

describe('Math Helper', () => {
    describe('roundNumber', () => {
        it('returns 0 when passed null', () => {
            MathHelper.roundNumber(null).should.equal('');
        });

        it('returns 0 when passed 0', () => {
            MathHelper.roundNumber(0).should.equal(0);
        });

        it('rounds up to 1.56 when passed 1.55555 rounded to 2 digits', () => {
            MathHelper.roundNumber(1.55555, 2).should.equal(1.56);
        });

        it('rounds up to -1.56 when passed -1.55555 rounded to 2 digits', () => {
            MathHelper.roundNumber(-1.55555, 2).should.equal(-1.56);
        });
    });

    describe('addArray', () => {
        it('returns 0 when passed empty array', () => {
            MathHelper.addArray([]).should.equal(0);
        });

        // it('returns null when passed null', () => {
        //  should.not.exist(MathHelper.addArray(null));
        // });

        it('returns 6 when passed [2,4]', () => {
            MathHelper.addArray([2, 4]).should.equal(6);
        });

        it('returns 7 when passed [-6, 11, 2]', () => {
            MathHelper.addArray([-6, 11, 2]).should.equal(7);
        });
    });

    describe('convertToPennies', () => {
        it('returns 142 when passed 1.42', () => {
            MathHelper.convertToPennies(1.42).should.equal(142);
        });

        it('returns 0 when passed 0', () => {
            MathHelper.convertToPennies(0).should.equal(0);
        });

        it('rounds down to 132 when passed 1.3242', () => {
            MathHelper.convertToPennies(1.3242).should.equal(132);
        });

        it('rounds up to 133 when passed 1.325', () => {
            MathHelper.convertToPennies(1.325).should.equal(133);
        });
    });

    describe('shuffle', () => {
        it('returns [] when passed []', () => {
            MathHelper.shuffle([]).should.deep.equal([]);
        });

        it('returns [""] when passed [""]', () => {
            MathHelper.shuffle([""]).should.deep.equal([""]);
        });

        it('returns ["cat"] when passed ["cat"]', () => {
            MathHelper.shuffle(["cat"]).should.deep.equal(["cat"]);
        });

        it('returns an equal but differently ordered array when passed an array of strings', () => {
            // Generate array of random strings
            let arr = [];
            let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < 500; i++) {
                let str = "";
                for (let j = 0; j < 4; j++) {
                    str += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                arr.push(str);
            }
            let arrCopy = arr.slice(0);
            let shuffled = MathHelper.shuffle(arr);
            shuffled.should.not.deep.equal(arrCopy);
            shuffled.should.have.members(arrCopy);
        });
    });
});
