<div align='center' ><font size='70'>循环原理</font></div>

-------


## 1. forEach

```js
      let arr = [1,2,3,4];
      Array.prototype.myForEach = function(fn) {
        for(let i = 0 ; i < this.length ; i++) {
          fn(this[i] , i , this);
        }
      }
      arr.myForEach(function(currentVal , currentIndex , arr) {
        console.log(currentVal , currentIndex , arr);
      })
```