<template>
<!-- 加动画时，注意每个组件都需要加一个class=animated -->
  <div class="animated box-position">
      <h3>News</h3>
      <div>
        <div class="loading-box" v-if="loading">Lading...</div>
        <ul class="news-list">
          <li v-for="(item,index) in newsList">
            {{item.content}}
          </li>
        </ul>
        <ul>
          <li v-for="pics in picList">
            {{pics.content}}<br>
            {{pics.url}}<br>
            <img :src="pics.url" alt="" id="imgs" >
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
//---------------数据交互---------------------
  export default{
    data(){ //数据
      return {
        // newsList:[{
        //   info:'d', 
        // },{
        //   info:'aaaa'
        // }]
        newsList:[],
        picList:[],
        loading:true
      }
    },
    created(){//组件创建时就立即操作数据 
      this.fetchData(),
      this.picData()
    },
    methods:{
      fetchData(){
      //   //https://bird.ioliu.cn/joke/rand?type=text&callback=aaaa
      //https://github.com/xCss/JsonBird/wiki
        this.$http.jsonp('https://bird.ioliu.cn/joke/rand',{
          params:{
            type:'text'
          },
          jsonp:'callback',

        }).then(res => {
          console.log(res.data.data)
          this.loading=false
          this.newsList=res.data.data
        },err => {
          console.log(err)
        })      
      },
      picData(){
          this.$http.jsonp('https://bird.ioliu.cn/joke/rand',{
            params:{
              type:'pic'
            },
            jsonp:'callback'
          }).then(
            res =>{
              // console.log(res.data.data)              
             this.picList=res.data.data 
            },err => {
              console.log(res)
            }
          )
      }
    }

  }
</script>
<style scoped lang="scss">
.news-list{
  ul li{list-style: none}
  li{
    width:100%;
    line-height:30px;
    border-bottom: 1px solid #ccc;
  }
}
	.loading-box{
		height:200px;
		display: flex;
		justify-content: center;
		align-items:center;
	}
</style>
