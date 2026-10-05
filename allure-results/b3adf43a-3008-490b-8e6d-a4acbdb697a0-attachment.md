# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WT.spec.ts >> WT functionality
- Location: tests\WT.spec.ts:3:5

# Error details

```
ReferenceError: i is not defined
```

# Page snapshot

```yaml
- table [ref=e2]:
  - rowgroup [ref=e3]:
    - row [ref=e4]:
      - cell "S#" [ref=e5]
      - cell "Course Name" [ref=e6]
      - cell "Instructor Name" [ref=e7]
      - cell "Start Date" [ref=e8]
    - row [ref=e9]:
      - cell "1" [ref=e10]
      - cell "C++" [ref=e11]
      - cell "James" [ref=e12]
      - cell "1/2/2009" [ref=e13]
    - row [ref=e14]:
      - cell "2" [ref=e15]
      - cell "Pascal" [ref=e16]
      - cell "John" [ref=e17]
      - cell "2/2/2009" [ref=e18]
    - row [ref=e19]:
      - cell "3" [ref=e20]
      - cell "Cobol" [ref=e21]
      - cell "Raja" [ref=e22]
      - cell "3/3/2009" [ref=e23]
    - row [ref=e24]:
      - cell "4" [ref=e25]
      - cell "Selenium" [ref=e26]
      - cell "Kangs" [ref=e27]
      - cell "4/4/2009" [ref=e28]
    - row [ref=e29]:
      - cell "5" [ref=e30]
      - cell "Perl" [ref=e31]
      - cell "Keith" [ref=e32]
      - cell "5/5/2009" [ref=e33]
    - row [ref=e34]:
      - cell "6" [ref=e35]
      - cell "Python" [ref=e36]
      - cell "Michell" [ref=e37]
      - cell "6/6/2009" [ref=e38]
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | test('WT functionality', async({page}) => {
  4  |   
  5  |     await page.goto('C://WebTable.html');
  6  | 
  7  |     let rowCount = await page.locator("//*[@id = 'idCourse']/tbody/tr").count();
  8  |     let colCount = await page.locator("//*[@id = 'idCourse']/tbody/tr[1]/td").count();
  9  |     let row_colCount = await page.locator("//*[@id = 'idCourse']/tbody/tr/td").count();
  10 |     console.log('Number of rows' , rowCount);
  11 |     console.log('Number of columns' , colCount);
  12 |     console.log('number of rows & columns', row_colCount);
  13 | 
  14 |     //particular cell
  15 | 
  16 |     let cellData = await page.locator("//*[@id = 'idCourse']/tbody/tr[2]/td[2]").textContent();
  17 |     console.log('Data of particular cell', cellData);
  18 | 
  19 | 
  20 |     //data from whole table
  21 | 
  22 |     for(let i=1; i<=rowCount; i++);
> 23 |         let data = await page.locator("//*[@id = 'idCourse']/tbody/tr["+i+"]").innerText();
     |                                                                         ^ ReferenceError: i is not defined
  24 |             console.log(data);
  25 | })
```