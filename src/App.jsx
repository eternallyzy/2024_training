import './App.css'
function App() {
  function fibo(n){
    let fi=[]
    fi[0] = BigInt(0);
    fi[1] = BigInt(1);
    for(let i=2;i<=n;i++){
        fi[i]=fi[i-1]+fi[i-2]
    }
    console.log(fi[n])
    return fi[n]
    
}

  return (
      <div>
        <button onClick={()=>alert(fibo(10000).toString())}>计算斐波拉契数列</button>
      </div>
      
     
  )
 
}

export default App
