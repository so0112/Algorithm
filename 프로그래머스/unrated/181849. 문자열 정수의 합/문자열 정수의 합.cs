using System;


public class Solution {
    public int solution(string num_str) {
        int sum = 0;
        
        foreach (char digit in num_str) {
            int num = (int)Char.GetNumericValue(digit);
            sum += num;
        }
        
        return sum;
    }
}