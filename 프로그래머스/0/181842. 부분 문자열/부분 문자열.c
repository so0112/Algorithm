#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(const char* str1, const char* str2) {
    
    int len1 = strlen(str1);
    int len2 = strlen(str2);
    
    for (int i = 0; i <= len2 - len1; i++) {
        int cnt = 0;
        
        for (int j = 0; j < len1; j++) {
            if (str2[i + j] == str1[j]) cnt++;
            else break;
        }
    
        if (cnt == len1) return 1;
     }
    
    return 0;
}