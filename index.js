let username=prompt("enter the username");
let item=prompt("enter the product");
let price=prompt("enter the price");
let day=prompt("day");
let occassion=prompt("enter the occassion");
let platform=prompt("enter the platform");
        let obj={
            name:username,
            item:item,
            price:price,
            day:day,
            occassion:occassion,
            platform:platform,
        }
        alert(`${obj.name} has purchased a ${obj.item} which costs ${obj.price} on ${obj.day} on occassion of ${obj.occassion} in ${obj.platform}`);
