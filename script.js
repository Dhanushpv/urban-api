window.onload = function() {
    let xhr = new XMLHttpRequest();
    console.log("xhr:", xhr);

    // Configure the GET request
    xhr.open('get', 'https://fakestoreapi.com/products');

    xhr.send();

    xhr.onreadystatechange = function () {
        console.log("readyState:", xhr.readyState);

        if (xhr.readyState === 4) {
            console.log("status:", xhr.status);

            if (xhr.status === 200) {
                let response = xhr.response;
                console.log("response:", response);
                console.log("typeof(response):", typeof(response));

                let datas = JSON.parse(response);
                console.log("datas:", datas);

                let hi = document.getElementById('hi');
                console.log("dataContainer:", hi);

                // Find the product with id=1
                let product = datas.find(item => item.id === 1);
                console.log("product:", product);

                if (product) {
                    hi.innerHTML = `
                        <div>
                            <h2>${product.title}</h2>
                            <p>${product.description}</p>
                            <button style=" padding: 10px; background-color: #fc5d35; color:white; border: 1px solid  #fc5d35;margin: 30px;">BUY NOW</button>
                             <button style=" padding: 10px; background-color: black; color:white; border: 1px solid black;">SHOW MORE</button>
                            <!-- <p>Price: $${product.price}</p>--!>
                          <!--  <p>Category: ${product.category}</p>--!>
                            
                        </div>
                    `;
                    img.innerHTML = `
                    <div>
                   <img src ="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style ="" width="500px " height="500px">

                     
                        
                    </div>
                `;
                } else {
                    hi.innerHTML = `<p>Product with id=1 not found.</p>`;
                    img.innerHTML = `<p>Product with id=1 not found.</p>`;
                }


                 // Find the product with id=3
                 let product2 = datas.find(item => item.id === 3);
                 console.log("product:", product2);
 
                 if (product2) {
                     hi2.innerHTML = `
                         <div>
                        <!-- <img src ="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" style ="" width="200px " height="200px"> --!>
                             <h2>${product2.title}</h2>
                             <p>${product2.description}</p>
                             <button style=" padding: 10px; background-color: #fc5d35; color:white; border: 1px solid  #fc5d35;margin: 30px;">BUY NOW</button>
                             <button style=" padding: 10px; background-color: black; color:white; border: 1px solid black;">SHOW MORE</button>
                             <!-- <p>Price: $${product2.price}</p>--!>
                             <!-- <p>Category: ${product2.category}</p>--!>
                             
                         </div>
                     `;

                     img2.innerHTML = `
                     <div>
                    <img src ="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" style ="" width="500px " height="500px">
                      
                         
                     </div>
                 `;
                 } else {
                     hi2.innerHTML = `<p>Product2 with id=3 not found.</p>`;
                     img2.innerHTML = `<p>Product with id=3 not found.</p>`;
                 }

                 // Find the product with id=4

                 let product3 = datas.find(item => item.id === 4);
                 console.log("product",product3)
                 if (product3) {
                    hi3.innerHTML = `
                        <div>

                            <h2>${product3.title}</h2>
                            <p>${product3.description}</p>
                            <button style=" padding: 10px; background-color: #fc5d35; color:white; border: 1px solid  #fc5d35;margin: 30px;">BUY NOW</button>
                            <button style=" padding: 10px; background-color: black; color:white; border: 1px solid black;">SHOW MORE</button>
                            <!-- <p>Price: $${product3.price}</p>--!>
                            <!-- <p>Category: ${product3.category}</p>--!>
                            
                        </div>
                    `;

                    img3.innerHTML = `
                    <div>
                   <img src ="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" style ="" width="500px " height="500px">
                     
                        
                    </div>
                `;
                } else {
                    hi3.innerHTML = `<p>Product with id=17 not found.</p>`;
                    img3.innerHTML = `<p>Product with id=17 not found.</p>`;
                }

                let product4 = datas.find(item => item.id === 16)
                if(product4){
                    head.innerHTML=` 
                    <div>
                        <h1>${product4.category}</h1>
                    </div>
                    `;
                    box1.innerHTML =`
                    <div><img src ="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" style ="width:200px;height:267px;">
                    </div>      
                    `;

                    subbox1.innerHTML =`
                    <div>
                  
                    <p style="text-align: justify ; padding:20px;">${product4.description}</p>
                    <div style="display: flex; padding:12px;" >
                     <p style="padding:10px;">Rate : ${product4.rating.rate}</p>
                    <p style="padding:10px;">Count : ${product4.rating.count}</p>
                    </div>
                    <p style=" background-color: red; text-align:center; width:200px; margin-left:10px;">Price: $${product4.price}</p>
                    </div>

                            
                    `
                }else {
                    head.innerHTML = `<p>Product with id=16 not found.</p>`;
                }

                let product5 = datas.find(item => item.id === 17)
                if(product5){
                    head.innerHTML=` 
                    <div>
                        <h1>${product5.category}</h1>
                    </div>
                    `;
                    box2.innerHTML =`
                    <div><img src ="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" style ="width:200px;height:267px;">
                    </div>      
                    `;

                    subbox2.innerHTML =`
                    <div>
                  
                    <p style="text-align: justify ; padding:20px;">${product5.description}</p>
                    <div style="display: flex;" >
                     <p style="padding:10px;">Rate : ${product5.rating.rate}</p>
                    <p style="padding:10px;">Count : ${product5.rating.count}</p>
                    </div>
                    <p style=" background-color: red; text-align:center; width:200px; margin-left:10px;">Price: $${product5.price}</p>
                    </div>

                            
                    `
                }else {
                    head.innerHTML = `<p>Product with id=16 not found.</p>`;
                }



                let product6 = datas.find(item => item.id === 15)
                if(product6){
                    head.innerHTML=` 
                    <div>
                        <h1>${product6.category}</h1>
                    </div>
                    `;
                    box3.innerHTML =`
                    <div><img src ="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" style ="width:200px;height:267px;">
                    </div>      
                    `;

                    subbox3.innerHTML =`
                    <div>
                  
                    <p style="text-align: justify ; padding:20px;">The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather.Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.  </p>
                    <div style="display: flex;" >
                     <p style="padding:10px;">Rate : ${product6.rating.rate}</p>
                    <p style="padding:10px;">Count : ${product6.rating.count}</p>
                    </div>
                    <p style=" background-color: red; text-align:center; width:200px; margin-left:10px;">Price: $${product6.price}</p>
                    </div>`;
                    bttn.innerHTML=`<button style=" padding: 10px; background-color: black; color:white; border: 1px solid  black;margin: 30px;">Load More</button>`
                }else {
                    head.innerHTML = `<p>Product with id=16 not found.</p>`;
                }

            }
        }
    };
}