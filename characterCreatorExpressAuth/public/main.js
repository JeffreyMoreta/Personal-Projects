var trash = document.getElementsByClassName("fa-trash");
var submit = document.getElementsByClassName("subBtn");

Array.from(submit).forEach(function(element) {
      element.addEventListener('click', function(){
          let nameList = [
              "Philip",
              "Greg",
              "George",
              "Paul",
          ]
          let getRandomInt = (max) => {
            return Math.floor(Math.random() * Math.floor(max));
          }
        fetch('characters', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': nameList[getRandomInt(4)],
            'str': getRandomInt(20),
            'dex': getRandomInt(20),
            'int': getRandomInt(20)
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('characters', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
