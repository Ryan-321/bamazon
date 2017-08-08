bamazon.js
===========

A store with command line interface store w/ a connected SQL Database

## Table of Contents

  1. [Documentation](#documentation)
    1. [Installation](#installation)
    2. [Run](#run)
    3. [Examples](#examples)



## General Overview

**`bamazon.js`** is a command line interface for [Node.js](https://nodejs.org/) and SQL connection to allow customers to shop and display the cost of those items.


> **Note:** **`bamazon.js`** this application was built as a learn experience and will not be maintained.


## [Documentation](#documentation)
<a name="documentation"></a>

### Installation
<a name="installation"></a>

``` shell
npm install
```

### Run
<a name="run"></a>

``` shell
node bamazon
```

<a name="examples"></a>
### Examples of Output (Run it and see it)

``` shell
node bamazon
```

![On launch](/readmepics/Screen%20Shot%202017-08-07%20at%207.53.57%20PM.png)

``` shell
Pick an item? (Use arrow keys)
```

![On Product Selection](/readmepics/Screen%20Shot%202017-08-07%20at%207.54.19%20PM.png)

``` shell
Quantity you would like to order? {Number Input by User}

```

![Quantity Selection](/readmepics/Screen%20Shot%202017-08-07%20at%207.54.39%20PM.png)

``` shell
chair inventory updated!

Thank you for selling your soul and shopping big business. Your total cost is: {Cost output}
```

![Final Price](/readmepics/Screen%20Shot%202017-08-07%20at%207.55.06%20PM.png)

``` shell

? Pick an item? (Use arrow keys)
❯ light bulb 
  sofa 
  coat 
  filter 
  bike 
  kayak 
  water bottle 
(Move up and down to reveal more choices)

```

Output if there isn't enough stock

![Not enough](/readmepics/Screen%20Shot%202017-08-08%20at%207.03.14%20PM.png)

``` shell
item_id  product_name  department_name  price    quantity
-------  ------------  ---------------  -------  --------
1        light bulb    housing          1.3      44      
2        sofa          furniture        2000.35  0       
3        coat          clothing         100.15   10      
4        filter        housing          0.95     30      
5        bike          outdoors         1100     12      
6        kayak         outdoors         560.5    1       
7        water bottle  outdoors         7.5      22      
8        chair         furniture        54.3     6       
9        desk          furniture        300      8       
10       socks         clothing         4.76     45      

Pick an item? kayak
Quantity you would like to order? 4
Insufficient quantity! There are 1 in stock currently
```