<template>
<!-- 加动画时，注意每个组件都需要加一个class=animated -->
  <div class="animated box-position">
      <h3>User</h3>
      <div>
        <ul>
          <li v-for="pList in phoneList">
            {{pList}}
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        phoneList:[]
      }
    },
    created(){
      this.phoneDate()
    },
    methods:{
      phoneDate(){
        this.$http.jsonp('https://bird.ioliu.cn/mobile',{
          params:{
            shouji:'18225512747'
          },
          jsonp:'callback'
        }).then(res => {
          this.phoneList=JSON.parse(res.data) //将json数据转换为JS对象
          var pL=this.phoneList
          JSON.parse(pL)
           // for (var i in this.phoneList){
          //    console.log(this.phoneList.result)
          // }

          console.log(pL)
        },err => {
          console.log(err)
        })
      }
    }


  }
</script>
4