const posts=[
    {title:'post1',content:'hello world'},
    {title:'post2',content:'hello world'},
    {title:'post3',content:'hello world'},
    {title:'post4',content:'hello world'},
    {title:'post5',content:'hello world'}
];

function postData() {
  setTimeout(()=>{
      let log=''
      posts.forEach((post,index)=>{
          log+=`<li>${post.title}${post.content}</li>`
      })
      document.body.innerHTML=log;
  },1000)  
};
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('bir error var.');
            }
        },1000);
    });   
};
async function funk(){
    await createPost({title:'Mehman',content:' Full HD devolomenet sanatci'});
    postData()
}
funk()

async function sabir(){
    const data=
        await fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(e=>e.json());
    console.log(data)
}
sabir();
// createPost({title:'post5',content:'new hello word'}).then(postData).catch((err=>console.log(err)));


// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,'hello world')
// );
// const promise4=fetch
//     ('https://jsonplaceholder.typicode.com/posts/1/comments').then(e=>e.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(val=>console.log(val));
