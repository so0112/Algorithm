// 순서 상관 o => 순열
// 순서 상관 x => 조합


// next_permutaion 오름차순 되어야 순열 제작 가능
// 따라서 sort 한 배열, 벡터에 사용해야함

#include<bits/stdc++.h>
using namespace std;
int main(){

    // array
    // int a[] = {1, 2, 3};
    // do{
    //     for(int i : a) cout << i << " ";
    //     cout << '\n';
    // }while(next_permutation(&a[0], &a[0 + 3]));

    vector<int> b = {1, 2, 3};
    do {
        for(int i : b) cout << i << " ";
        cout << '\n';
    }while(next_permutation(b.begin(), b.end()));
}