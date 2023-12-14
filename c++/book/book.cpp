// g++ -std=c++14 -Wall book.cpp
#include <iostream>
using namespace std;

int n, cnt;

int main() {
  // n 값을 입력받음
  cin >> n;
  int a = 0;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < i; j++) {
      a += i + j;
      cnt++;
    }
  }

  // a 값 다음 개행 출력
  cout << a << '\n';
  // cnt 값 다음 개행 출력
  cout << " cnt : " << cnt << '\n';
  return 0;
}

