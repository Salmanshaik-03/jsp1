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
        alert(`${obj.name} has purchased a ${obj.item} which costs ${obj.price} on ${obj.day} on the occassion of ${obj.occassion} in ${obj.platform}`);

let studname=prompt("enter the studentname");
let companyname=prompt("enter the company name");
let package=prompt("enter the package");
let domain=prompt("enter the domain");
let joindate=prompt("enter the join date");

        let std={
            name:studname,
            company:companyname,
            package:package,
            domain:domain,
            joiningdate:joindate,
        }
alert(`${std.name} got placed in ${std.company} company as a ${std.domain} with package of ${std.package} and joining is on coming ${std.joiningdate}`);