import React from 'react'
import './settings.css'

function Settings() {
  return (
    <div className='TotalSettings' >
    <div className='karthikSettings'>
        <div>
      <img className='profilekarthik' src='https://s3-alpha-sig.figma.com/img/caa8/f4ed/231db19d5444bd9c07e6c0a7c6416b96?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDB6lyn5FHMDygUmB0Qd6T7ISj2lF1hSz3Y-0~3LrlsgvBrssR9wbE43I93Nsd53AhYkfDfm9mjma0rd6I-DN-SObyFeuTpZLtwxj2YuM9d8lfVJ6OTx0qov6x8CCQ4k1a7fLf6i7wLvKJ4GvEr3gh8mqCAEb35DLd3G8kU4a3~SDXRAq6d6HmGE~dBpJfLzGhWqSZ5KdkffqAmN-Ij85SefI7aAnUmNaVlSW9gz9rXQigmywJrEARLppMBTGrIcsH7ybP~zsyxmGlhpkKjCGFE3UD5f80bZKwMFmnOZu5SQtBdk4vNYpNs0-jBceA0xevMzHtUUwDyWo1bIQksuCw__'  alt='#dp'/>
      </div>
      <div className='karthikLabels' >
        <label>User Name:</label>
        <input type='text' placeholder='alphaUser'/>
      </div>
      <div className='karthikLabels' > 
        <label>Email:</label>
        <input type='text' placeholder='wRJ9L@example.com'/>
      </div>
    </div>
    <div>
        <h1> Subscriptions  </h1>
        <div className='Addvert-karthik' >
            <p className='basic-plan ' > You are currently on the <a className='ankertag' style={{color:'white'}} href='#karthik' >Ques AI Basic Plan!</a> </p>
            <p className='Upgrade-buttons' >Upgrade</p>
        </div>
        <a style={{color:'red', marginTop:10}} href='#cancel' >Cancel Subscription</a>
    </div>
    </div>
  )
}

export default Settings
