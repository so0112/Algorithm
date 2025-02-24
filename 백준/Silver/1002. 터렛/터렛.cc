#include <iostream>
#include <cmath>  // sqrt, pow
using namespace std;

int main() {
    int T;  
    cin >> T;

    while (T--) {  
        int x1, y1, r1, x2, y2, r2;
        cin >> x1 >> y1 >> r1 >> x2 >> y2 >> r2;

        double d = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2)); 

        if (x1 == x2 && y1 == y2 && r1 == r2) {  
            cout << -1 << endl;
        } else if (d > r1 + r2 || d < abs(r1 - r2)) {  
            cout << 0 << endl;
        } else if (d == r1 + r2 || d == abs(r1 - r2)) {  
            cout << 1 << endl;
        } else {  
            cout << 2 << endl;
        }
    }

    return 0;
}