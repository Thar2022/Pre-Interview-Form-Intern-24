
import { merge } from '../src/merge'; 

describe('merge function', () => { 
    it('should merge three sorted arrays correctly', () => { 

        const arr1 = [3, 5, 1, 7, 9];
        const arr2 = [2, 4, 6, 8, 10];
        const arr3 = [10, 8, 6, 4, 2];
        const result = merge(arr1, arr2, arr3);
        //console.log(result);
        expect(result).toEqual([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10]);
        
    });
 
}); 