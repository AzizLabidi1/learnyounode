var ans = 0;
for (var i=2;i<process.argv.length;i++){
    ans += +(process.argv[i]);
}
console.log(ans);