#include<bits/stdc++.h>
using namespace std;

#define int long long

int32_t main(){
    int t;
    cin >> t;
    while(t--){
        int n;
        cin >> n;
        int nextnorth = 0, nextsouth = 0, nexteast =1 , nextwest =1;
        int yheli = 0, xheli = 0;
        int yrover = 0, xrover = 0;
        string s;
        cin >> s;
        string ans = "";
        int countH = 0, countR = 0;
        for(char c: s){
            if(c == 'N'){
                if(nextnorth == 0){
                    yheli += 1;
                    ans += 'H';
                    countH++;
                }
                else{
                    yrover += 1;
                    ans += 'R';
                    countR++;
                }
                nextnorth = 1 - nextnorth;
            }
            else if(c == 'S'){
                if(nextsouth == 0){
                    yheli -= 1;
                    ans += 'H';
                    countH++;
                }
                else{
                    yrover -= 1;
                    ans += 'R';
                    countR++;
                }
                nextsouth = 1 - nextsouth;
            }
            else if(c == 'W'){
                if(nextwest == 0){
                    xheli -= 1;
                    ans += 'H';
                    countH++;
                }
                else{
                    xrover -= 1;
                    ans += 'R';
                    countR++;
                }
                nextwest = 1 - nextwest;
            }
            else if(c == 'E'){
                if(nexteast == 0){
                    xheli += 1;
                    ans += 'H';
                    countH++;
                }
                else{
                    xrover += 1;
                    ans += 'R';
                    countR++;
                }
                nexteast = 1 - nexteast;
            }
        }
        if(xheli == xrover && yheli == yrover && (countH != 0) && (countR != 0)){
            cout << ans << endl;
        }
        else{
            cout << "NO\n";
        }


        
    }
    return 0;

}