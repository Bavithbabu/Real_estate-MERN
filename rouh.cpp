// #include<bits/stdc++.h>
// using namespace std;

// class Solution{
//     public:
//     vector<vector<int>>nearest(vector<vector<int>>grid){
//         int n=grid.size();
//         int m=grid[0].size();

//         vector<vector<int>> vis(n,vector<int>(n,0));
//         vector<vector<int>> dis(n,vector<int>(m,0));
//         queue<pair<pair<int,int>,int>> q;
//         for(int i=0;i<n;i++){
//             for(int j=0;j<m;j++){
//                 if(grid[i][j]==1){
//                     q.push({{i,j},0});
//                     vis[i][j]=1;
//                 }else{
//                     vis[i][j]=0;
//                 }
//             }
//         }
//         int delrow[] = {-1,0,+1,0};
//         int delcol[] = {0,+1,0,-1};
//         while(!q.empty()){
//             int row = q.front().first.first;
//             int col = q.front().first.second;
//             int steps=q.front().second;
//             q.pop();
//             dis[row][col]=steps;
//             for(int i=0;i<4;i++){
//                 int nrow=delrow[i]+row;
//                 int ncol=delcol[i]+col;
//                 if(nrow>=0 && nrow<n && ncol>=0 && ncol<m && vis[nrow][ncol]==0){
//                     q.push({{nrow,ncol},steps+1});
//                 }
//             }

//         }
//     return dis;
//     }
// };

// int main(){
//     vector<vector<int>> grid{
//         {0,1,1,0},
//         {1,1,0,0},
//         {0,0,1,1},
//     };

//     Solution obj;
//     vector<vector<int>> ans=obj.nearest(grid);

//     for(auto i:ans){
//         for(auto j:i){
//             cout<<j<<" ";
//         }
//         cout<<"\n";
//     }

//     return 0;
// }

#include <iostream>
#include <vector>
#include <queue>  // Missing header for queue
using namespace std;

class Solution {
public:
    vector<vector<int>> nearest(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();

        vector<vector<int>> vis(n, vector<int>(m, 0)); // Fixed: m instead of n
        vector<vector<int>> dis(n, vector<int>(m, 0));
        queue<pair<pair<int, int>, int>> q; // Removed duplicate queue declaration

        // Push all '1' cells into the queue
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 1) {
                    q.push({{i, j}, 0});
                    vis[i][j] = 1;
                }
            }
        }

        // Directions for 4-way movement (Up, Right, Down, Left)
        int delrow[] = {-1, 0, +1, 0};
        int delcol[] = {0, +1, 0, -1};

        // BFS traversal
        while (!q.empty()) {
            int row = q.front().first.first;
            int col = q.front().first.second;
            int steps = q.front().second;
            q.pop();

            dis[row][col] = steps;

            for (int i = 0; i < 4; i++) {
                int nrow = row + delrow[i];
                int ncol = col + delcol[i];

                if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m && vis[nrow][ncol] == 0) {
                    q.push({{nrow, ncol}, steps + 1});
                    vis[nrow][ncol] = 1; // Mark as visited to avoid duplicate processing
                }
            }
        }

        return dis;
    }
};

int main() {
    vector<vector<int>> grid = {
        {0, 1, 1, 0},
        {1, 1, 0, 0},
        {0, 0, 1, 1}
    };

    Solution obj;
    vector<vector<int>> ans = obj.nearest(grid);

    for (auto i : ans) {
        for (auto j : i) {
            cout << j << " ";
        }
        cout << "\n";
    }

    return 0;
}
