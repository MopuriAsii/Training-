# Intro

1. FE
   - hii

```css
.hi {
  object-fit: cover;
  width: 100vw;
  height: 300px;
  object-fit: cover;
}
```

# Intro to JavaScript:

Declaraing the variable:  
 var x=10  
Finding the type of variable:  
 typeOf(x)

```Js
var student = {
  name:"ashi"
  age:20
  company:"proclink"
}

typeOf(name)=> typeOf(student.name)

```

data type of array : 'object'[beacause of key value pair]  
typeOf(Infinty): 'number'  
typeOf(-Infinty): 'number'

when u declare the variable but when u don't give the value then we get undefined

Undefined is a type and it's value is also undifined  
typeOf(null): 'object'

The js code is written within the <script></script>  
It must be written before </body>

# Types of variable declarations:

1. var :  
   Reassign and redeclare is possible,
2. let:  
   reassign is possible and redeclare is not possible ,
3. const:  
    reassign and redeclare not possible.
   we can't change the address but we can change the value.

# Datatypes:

string,number,null,boolean,object,undefined

# scope in JS:

Lifetime of the variable.

```JS

<body>
    <script>
        {
            var x1=10;
            let x2=20;
        }

        console.log(x1);
        console.log(x2);
    </script>

</body>

```

In the above code, let cannot be accessed because it cannot be updated outside the block.

Undefined: value(when we does not assign an value)
not defined: error

````Js

function fun(){
  var t1=10;
  let t2=20;
}

console.log(t1)
console.log(t2)

'''


```Js


function drivingTest(age){
  if(age>18){
  let msg="elligible";
  }
else{
  let msg="not elligible";
}
console.log("men are" + msg);
}
drivingTest(20);

```
````

# Typecasting/coercion:

```js
var x1 = 3;
var x2 = "5";
console.log(X1 + x2); //35
console.log(x1 - x2); //-2
```

Js automatically perform implicity conversion.

## Explicit Coercion:

console.log(x1 + parseInt(x2));
cosole.log(x1 + +x2);

## Implicit Coercion:

var x1 = 3;
var x2 = "5";
console.log(x1 + x2);
console.log(x1 - x2);

Array-> string:

[2,4,5] + "abc" //"2,4,5abc"

.toString():converts int to string.

null + 5 // 5

4 \* "5a" // NAN(not a number)

typeOf(NAN) // number

NAN / 4 , NAN \* 3 // NAN

# Which is faster?

== or === -> ===

== -> allows typecasting.
===-> does not allow typecasting.

# inline: witing code in same page

# exline: writing code in new file and reference it using src within <script src="path name"> </script>

# Types Of Functions:

1. Normal Function:
   function call, function declaration, function body

// n->parameter
// argument->10

function double(n){
return n \* 2;
}
console.log(double(10));

after return keyword the statements written will not be executed.

2 ways to exit path:

       put the return keyword
       exists at the last line of the body

2. Arrow Function:

const double = (n) => {
return n \* 2;
};

                or

const double = (n) => n \* 2;

# why do we create a function:

change in one place it's gets reflected everywhere.

# 5 pillars of code quality:

1. Readability -> 75%
2. Maintainability -> code debt
3. Extensibility
4. Testability
5. Performance

# Copy By Value:

var q1=[100,200]
var q3 = [...q1]; //spread (copy by value)

... -> spread operators

// merging the arrays:

var t1=[400,500];
var t2=[90,80];
var t3=[...t2,...t1];
console.log(t3)

o/p -> [90,80,400,500]

# Different for loops:

```js

1. for loop:

// more control

const marks = [80,90,100];
for(let i=0;i<marks.length>;i++){
  console.log("index:",i,"mark",marks[i]);
}

2. for in loop:

if you want index

//readable and simple

for(let idx in marks){
  console.log("index:",idx,"marks",marks[idx];)
}

3. for of loop:

if you don't want index i.e., uses of elements.

//readable and cleaner


for(let mark of marks){
  console.log("mark:",mark);
}




```

#ES6 featues:

1. let & const
2. ``Template literal
3. ...Spread Operator
4. ...Rest operator
5. Destructuring
6. class
7. Arrow Function

# Object methods:

```js

let salaries = {
john:100,
abhi:200,
};

Object.keys(salaries):To access names //john,abhi
Object.values(salaries):To access salary //100,200
```

# Template literal:

function fullname(fn,ln){
return 'welcome ${ln}, ${fn} !!!';
}
fullname("abc","def")

# feactures:

1. uses interpolations
2. suports multi line strings

# REfactoring:

making the quality better with same functionality.

# Array destructuring: uses index

const [t1, t2,t3] = [100,200]; //t3=undefined
console.log(t1,t2,t3);

```js
default value is taken only if t3 is undefined

const[t1,t2,t3=80]=[100,200,300];         t1=100 t2=200
console.log(t1,t2,t3);                  //t3=300

const [t1, ,t2,t3=80]=[100,200,null];
console.log(t1,t2,t3);                  //100 null 80

```

# Object destructuring:uses keys

it matches with key names(names of the attributes).

```js

const {name,skill}={
  name='abc'                     //undefined
}
console.log(skill)


if the default is given it will print undefined only

const {name,skill='genius'}={
  name='abc'                     //genius
}
console.log(skill)

```

# ES6 feactures:

comma(,) is replaced by \_

# Binaray operator

1. Arithmetic +,-,\*,/
2. Logical &&,||
3. Relational >,<,==,===

# unary Operator:

++, --

# Ternary Operator:

'''js
?,:

# Truthy vs Falsy:

"if" value converts into true the truth

let x = "cool";

if(x) {
console.log("hey");
} else{
cosole.log("nope")
}

# STRING METHODS:

.toUpperCase()
.toLowerCase()

converting string to array:

"hi hello"
"hi hello".split(" ") =>['hi','hello']

converting array to hello:

.join(" |") => 'hi|hello'

for splitting for every character =>.split('')
.reverse():it is only performed upon arrays only.
.slice()
.push()

\*\*\*\***\*\*\*\***\***\*\*\*\***\*\*\*\***\*\*\*\***SDLC\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***

# SDLC(S/w Development Life Cycle):

1. Planning : planning the idea
2. Analysis : Business and Techincal
3. Design : Figma, Adobe xd,Sketch
   features:variant,autolayout
4. Implementation
5. Testing and integration
6. Maintenanace:requesting for small features which need to be added.

STAKEHOLDERS:  
people who are responsible if anything goes wrong in the product(office point of view).  
people who are taking risk.

# 6 Phases Of the SDLC:

1. ANALYSIS:

   1. Product Owner
   2. Project Manager
   3. Business Analyst
   4. CTO

2. DESIGN:  
   1.System Architect : set up blueprint of the project.  
   2.UX/UI designer

3. DEVEPLOMENT:

   1. Front-end DEveplopment
   2. Back end Deveploment

4. Testing:

   1. Solution Architect
   2. QA Engineer
   3. Tester
   4. DEvops

5. Deployment:

   1. Data Administrator
   2. Devops

6. Maintenance:
   1. users
   2. testers
   3. support managers

# Product based and Service based companies:

# Waterfall vs Agile:

![alt text](<Screenshot (6).png>)

Waterfall model examples:

1. Metro building,civil projects,automobilies,migration projects only.
2. (6 months time)
3. 2 releases in a year.

Agile model examples:

1. It is a cyclic process.
2. 12 releases in a year.

# Implementation of Agile process:

The project is divided into equal parts-> scrum.

![alt text](image.png)

sprint retrospective will happens for an hour.
story point means how much time you are giving to complete the work.

# SCRUM: implementation of agile process

# KANBANN BOARD:A Kanban board is a visual project management tool used to track and manage work in progress.

![alt text](<Screenshot (12).png>)

# Burn down chart:A burn down chart is a visual representation of the progress of work completed against the projected rate of completion in a project, typically used in agile methodologies like Scrum.

The horizontal axis represents time (usually in iterations or sprints).  
The vertical axis represents the amount of work remaining (often measured in story points or tasks).  
At the start of the project or iteration, the chart begins with a line that represents the total amount of work that needs to be completed.  
As work progresses, the line "burns down" as tasks are completed and the remaining work decreases.  
Ideally, the burn down line should meet or exceed the projected rate of completion, indicating that the team is on track to complete the work within the given time frame.

![alt text](<Screenshot 2024-06-03 142442.png>)

![alt text](<Screenshot (14).png>)

# CODING STANDARDS:

1. variable names and function names should be in camel case.
2. camel case and pascal case.

# CODING STANDARDS:

are meant to have uniformity through out your code base.

## variables name:

1. understandable /Descriptive
   ```js
   int a= 50; //❌
   int age= 50;✅
   ```

````
camelCase

```js
let student_name = "abc";         //    ❌
let studentName = "abc";          //    ✅
````

choose 'let' over 'var' , 'const' over 'let':

```js
let pan = "CDRT5678"; //❌
const pan = "CD4357"; //✅
const marks = [10, 20, 40]; //✅
```

write your const case:

````js
const piValue = 3.14; // ❌
const PI_VALUE =3.14; //✅

## Errors for variable names:

1. Reserved keywords ('if','for')
```js
let if = 'abc'; //❌

2. cannot start with numbers
```js
let 2cool ="abc"; //❌
````

3. connot have special symbols:

```js
let stu@1='abc';  // ❌
let stu_1="abc";  //✅
```

# DOCUMENTATION:

1. single comment:

```js
//
```

2. Multiple comment:

```js
/**
 *
 *
 *
 */
```

for js doc pres /\*\* and tab then you will get comments.
autocomplete is advantage of js doc.

# Agile Methodolgy:

planning->assign tasks,story points.  
in review the people check the code quality.

# ESLint website:

enforces code standard.
Maintains code quality.

cournel:
interface between h/w and shell.

# GIT:

1. Linus Torvalds invented git.
2. Git is used to maintain versions system.
3. Instead maintaining seperate folders it maintain all changes(commits) in one folder.
4. to manage linux, git is invented. to manage the source code of linux.

## git init:

git init create a git folder and it contains all git files.

## git add . -> add all the files

             or

git add filename

## $ git commit -m "start of my git fundamentals" -> add message

# STEPS FOR GIT :

-> git init  
-> git add .  
 -> git add ./hello.js ./fun.js  
 -> git commit -m "Start of my git fundamentals"
->git status
whenever modifications are done then we need to type "git add ." and also write "git commit" command also.

// git log -> shows the all actions performed by the user.

// git checkout -> goes forward.

//git checkout - -> comes back to the existing path

//git checkout master ->goes to the paritcular master branch.

//git checkout -b branchname ->creates and check the branch.

//git log -1 -> shows the reacent commit

//git log -2 -> shows the second commit

// git log --author=ashi -1 -> displays al the commit details done by given author name

//git log --help -> gives the display of all commands

//git log -p(patch) ->defines the recent changes.

//git log--graph ->displays line

//git merge branch-name ->merges the branches

//$ git branch -D branchname -> delete branch name

111 git commit -m "Testing with console"  
112 git status  
113 git log  
114 git aa  
115 git cm "Git notes"  
116 git log  
117 git checkout 601253fb4d  
118 git checkout -  
119 git log  
120 git d60b04b716  
121 git checkout d60b04b716  
122 git checkout 601253fb4d  
123 git checkout -  
124 git checkout -  
125 git checkout -  
126 git checkout master  
127 git checkout 601253fb4d  
128 git checkout master  
129 git log -1  
130 git log -2  
131 git log --author=raga

// git log -Ssum -> gives the information about the searching data

// git log -Ssum -p ->filters the given commints.

// git branch --all ->displays all branch names.

// git bisect -> it is used to find the bugs by dividing into half

![alt text](<Screenshot (20).png>)

# GIT vs GITHUB:

github is used to store files.It is a s/w
git is used as a version control.can works offline.

# Stages of git:

1. Working stage
2. staging stage:  
   can comibine multiple files into one single commit.
3. commit stage:  
    when to commit:
   1. Logical change
   2. small commits
   3. Multiple commits(backup)
   4. Always commit when everything is working(code working)

# Commit Messages:

A message should define "what happened actually" and "how did it worked"
and "why changes were done" and "why it was added".

unstaging the change :git reset filename;  
deleting the change: git checkout - .  
git revert "commit id" -> for deleting changes.
git reset --soft Head~1 ->used to edit the particular command  
git reset --hard Head~1 -> cannot be edited

# VIM:

h->left  
j->down  
k->up  
l->right  
w->forward  
b->backward  
dw->delete a word  
u ->undo  
d2w-> delete 2 words  
verb+number+movement  
diw->delete the word  
dip->delete inside the paragraph  
q!->forcefully quit  
p->paste

# Branches:

1. Master -> customer
2. Staging -> QA
3. dev -> Developer

![alt text](<Screenshot (23).png>)

fast forward merging -> if we do not give any commit messages then it takes as fast forward merging.

You have a branch, let's call it "feature," that you've been working on.  
While you were working on the "feature" branch, no new commits were made to the branch you intend to merge into, typically the "master" branch.  
When you merge the "feature" branch into "master," Git realizes that there's a direct path from the current commit of "master" to the commit you want to merge from "feature."  
Instead of creating a new merge commit, Git simply moves the "master" branch pointer to point to the latest commit of "feature." This action is the fast-forward merge.

![alt text](<Screenshot (24).png>)

MERGE COMMIT:

You have two branches in your Git repository, let's call them "branch A" and "branch B."
You decide to merge "branch B" into "branch A" using the git merge command.
Git analyzes the histories of both branches to determine the common ancestor commit, i.e., the point where the branches diverged.
Git then applies the changes made in "branch B" since the common ancestor commit onto "branch A."
If there are no conflicts, Git automatically creates a new commit, known as the merge commit, that incorporates the changes from "branch B" into "branch A." This commit has two parent commits: one from "branch A" and one from "branch B," representing the history of both branches.

In centeralized system , if one person changes the code then it will be reflected to all systems.

In distributed system , there will be a backup.

![alt text](<Screenshot (25).png>)

# BEHIND:

1. In Git, "behind" refers to the number of commits that are present on the main branch (usually master) but not on the current branch. This can occur when the main branch has new commits that have not been merged into the current branch. The "ahead" count, on the other hand, indicates the number of commits that are present on the current branch but not on the main branch.

2. merge commit will be happened

# AHEAD:

1. In Git, "ahead" refers to the number of commits that are present on the current branch but not on the main branch. This count indicates how many commits the current branch has that are not yet merged into the main branch. The "ahead" count is typically displayed in the format "X commits ahead" when viewing a branch on GitHub or other Git platforms.

2. fast forward merge will happen

![alt text](<Screenshot (26).png>)

# CREATING PULL REQUEST(PR)

git push --set--upstream branchname -> to push in branch

git pull -> whatever data is present in online will come to offline.

1. PUSH
2. Git hub (PULL)
3. checkout branch (in terminal)
4. PULL in terminal(master branch)

# CREATING THE CONFLIT:

1. from master branch create new branch
2. do commit

// git stash :whwn we want to store uncomplete code.

//git stash apply ->to get back to the work

They are not online.

# GIT REBASE:

combine commit together.  
we will not perfeorm rebase on dev,master,satging branches.

// git rebase -i HEAD~4 ->combine first 4
//

# git rebase :

for keeping history in a straight line.

When do we get merge conflict?  
Steps for meging?
How to merge online?
->to review the code(to add reviewers)  
->first commit the changes in dev branch.  
->commit  
->push the commits  
->adding the discriptions

//to improve the code quality we perform PR.

# merges:

1. fast forward merge
2. merge commit

## to avoid rebase:

//git pull --rebase origin dev -> all the updates made in dev will come to feature.

# TERMINOLOGIES:

1. configuration management: system -> code
   Configuration management is the practice of systematically managing the configurations of systems, software, hardware, and infrastructure throughout their lifecycle. It involves identifying, controlling, and tracking changes to configuration items (CIs) to ensure that they are accurate, complete, and consistent.

2. Configuration item(CI) : deals with git and files in git (SOURCE CODE)
   They represent any item that is managed as part of the configuration management process.

3. Release management: related to Branching strategy(master, staging, dev)  
   Release management is the process of planning, scheduling, coordinating, and controlling the deployment of software releases into production environments. It encompasses the activities and practices involved in delivering software products or updates from development and testing phases to end-users or customers.

4. CI/CD:

5. Audit : 1. commits frequently 2. git blame ->displays all the time when the code is modified.

6. BASELINE(Savepoints) :

   1. commits are used to act as a savepoints.

   2. tags: versions

7. Accounting:

   1. git log : who did what(History)
   2. git blame

8. change mangement: changes done in the system  
    how efficiently the system handels the change
   1. branches
   2. PR(PULL REQUESTS)

![alt text](<Screenshot (29).png>)

# benifits:

1. Traceability -> tracking the changes.(git log)
2. Quality and consistency.(PR)
3. Reduces the risk of loosing of code & avoids errors.(backup,commits)
4. change management is smooth.

# RELEASE MANAGEMENT:

1. planning

   1. branching strategy

2. Governance : maintains the system
   taks about the access level for each branch

3. Scheduling: maintaing the schedules

   1. Sprints
   2. Agile

4. Automation : change ; no human errror

   1. CI/CD
   2. no human error

5. contingency : backup plan

   1. Rollback:going back to the older version

   ![alt text](<Screenshot (30).png>)

paas(provides envirnonment) -> render,netlfy ,railway,vercel

release management = paas

saas -> twitter.com ,netflix

iaas -> aws , azure , GCP

# CI/CD(continous integration/continous deployment):

![alt text](<Screenshot (33).png>)

![alt text](<Screenshot (35).png>)

![alt text](<Screenshot (37).png>)

index.html -> it is the 1 page that every browser request for.

\***\*\*\*\*\*\*\***\*\***\*\*\*\*\*\*\***HTML**\*\***\*\***\*\***\*\*\***\*\***\*\***\*\***
list->ordered, unordered , nested
paragraph -> <p>
target="\_blank" -> opens the link in new tab
email and tel

**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***CSS**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***

# what is CSS?

# types of css:

1. Inline css:

```html
1.
<li style="color: red">sleep</li>
```

2. keep it concise.
3. External css :
   1. create a separate file .It is written within the
   ```html
   <link rel="stylesheet" href="filename.css" />
   ```
   2. It is written within
   ```html
   <head></head>
   ```
   3. Do not put in `
   ```html
   <style>
   ```
   4. Reuseability
4. Internal css :
   for giving style to a single file.
   reduces rendering time.
   if size is small because it does not make html request

   1. before

   ```html
   <body></body>
   ```

   which is given in

   ```html
   <style>
   ```

# CSS Terminology:

![alt text](<Screenshot (38).png>)

# TEXT STYLING:

1. font-size
2. font-weight:thickness of font
3. font-style : italic
4. color:  
   can be represented by
5. color name
   5.5 color format:  
   5.5.1. Hex value  
   5.5.2 rgb representation  
    r -> 0 to 255  
    a-> 0 to 1
   5.5.3. hsl(hue,staturation,lightness)->human friendly  
   h->supports all s/w
   5.5.4 lch:gammet is extended ; larger color gammet
   SRGB,adobeSRGB,DCPI

# TEXT STYLING-II:

1. text-transform: changes letter case
2. text-align
3. text-decoration
4. letter-spacing:
5. line height:spaces between lines

if font-size is high then line height is low:readability improves

staging can be megrd by testers
master by devops

why do we ugligfy -> downloads faster(by reducing the size)  
 removes the unused code(comments)  
 slag,discord,teams

serif -> edges will be there,used for traditional,professional , banks
sans serif -> no edges,apps,twitter,new

# BOX MODEL:

{
border: 5px solid pink; // add borders
border-style:"dotted";  
}

margin ->outside of border
border -> outside of padding
padding -> first

By default list comes with padding

when we want give space btw 2 elements -> margin
when we want to shrink inside -> padding

border-radius: 16px; // to bend the border

padding is a complex property
border is a complex property

1vh =1% of screen height
1vw = 1% of screen width
width = 1% of container width

by default list has default padding.
border,padding,margin will not get inherited
text related will get inherited

display(property)->displays the paragraph in line by line
but display property is not present in anchor<a></a>tags so it will not display line by line

differences btw inline and block elements
all headings are block elements <div> is a block element
<span> is an inline element

\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***SQL\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***

# what is database?

special s/w to store the data

## can we keep db in laptop?

no(sir answer)

![alt text](<Screenshot (39).png>)

Yes, you can store a database on a laptop. Many database management systems (DBMS) are designed to be installed and run on personal computers, including laptops. Popular database software such as MySQL, PostgreSQL, SQLite, and Microsoft SQL Server can all be installed on laptops for local development, testing, or even production use, depending on your needs. Storing a database on your laptop can be useful for small-scale projects, learning purposes, or when you need to work offline. Just ensure that your laptop has enough storage space and resources to handle the database workload you intend to run.

## where does db lives?

cloud

## what is cloud?

renting PC

## cloud providers:

1. aws
2. Azure
3. Google cloud Platform
4. IBM cloud
5. Alibaba cloud
6. Salesforce

## why are u renting?

1. because it costs more so it is better to rent(High initial cost)
2. Rent rooms
3. A/C
4. Powerbill
5. Maintenance(swaps hard disk or ram)
6. spares
7. Generator
   ![alt text](<Screenshot (46).png>)

### advantages of renting?

1. Disaster management:  
   food,eathquake -> disasters

the place where the disasters caannot be possible

2. Scaling:

2.1 vertical scaling: increases the RAM or by upgrading the Processors.Adding powerful  
2.2 Horizontal Scaling: adding more computers

![alt text](<Screenshot (49).png>)

2.3 AutoScale(Automatic Scaling):PAy as much as you use.

Autoscaling in the context of databases involves automatically adjusting the capacity of the database system based on changes in workload or resource demand. This ensures that the database can efficiently handle varying levels of traffic without manual intervention.

3. PC:

## what os in cloud?

linux(more servers runs using linux)

why not windows? -> (licenses fee)

Advantages of linux:

1. free of cost
2. Open-Source ->if there is a bug then everybody is responsible to solve it.
3. Secure
4. Small footprint:the lesser RAM,storage the lesser cost it charges.
5. Automation:managing anything from terminal

Linux has many flavour which is called as distros(alpile 256MB(smaller in size))

DDOS

How DDOS attack work

solution : is to divert the traffic to dummy websites.  
can be identify using Region IP and also captcha true

## DATABASE-why?

It gives faster access by providing users a copy of accessed data from HHD to RAM(copies the data from HDD)

## features of DB(special features):

Reading spped becomes faster

1. Database->Frequently asked it will save it in the RAM
2. Querying becomes easier
3. CRUD - easy
4. Backups are inbuilt
5. Undo-easily(time limit)
6. Performance

another advantage of renting -> disaster management(disaster prone areas)

## SQL VS NO SQL:

### examples of SQL and NO SQL:

RELATIONAL DATABASES(SQL):

PL/SQL
PostgreSQL
MYSQL
amazon RDS

NOn-RELATIONAL DB(NOSQL):

mongoDB
couchDB
redis
cassandra(netflix used this DB)
Dynamo DB
neo4j

READ the SELECT QUERY

### in:

select \* from movies where year in (2001,2007,2010)

= refers case sensitive(must match correctly)
LIKE refers not case sensitive

% = 0 or more

Distint,orderBY,limit

## problems for storing duplicate data:

1. storage
2. update anomali is avoided

### primary key:

1. not null
2. unique value
3. primary key must be one for the table

### JOINS:

before separation -> de normalization
after separation -> normalization

## NORMALIZATION:

1. To incerease the safety of the data(by doing the normal forms)

### rules for 1NF:

![alt text](<Screenshot (69).png>)

### composite key:

### rules for 2NF:

to avoid update anomalies

1. non key attributes must be depends upon entire primary key or composite key
2. there should be no relation between non key attributes

## anamolies:

1. update
2. deletion
3. insertion

### rules for 3NF:

there should not be any dependencies between non key attributes  
these should be completely dependent upon the primary key

### rules for BCNF:

every attributes should be dependent upon the primary key

# JOINS:

for data safety we perform joins(i.e normalization) and when we want to fetch the data from 2 tables

## INNER JOIN:

it will get the common items in both the sets

![alt text](<Screenshot (84).png>)
![alt text](<Screenshot (85).png>)

## OUTER JOIN:

1. LEFT JOIN:
   intersection items+left items
   ![alt text](<Screenshot (86).png>)

2. RIGHT JOIN:

intersection items+right items

![alt text](<Screenshot (88).png>)

3. FULL JOIN:
   intersection items+left items+right items

![alt text](<Screenshot (89).png>)

### A join B on PK=FK

# AGGREGATION:

aggregation means summerization.

## functions of aggregation:

![alt text](<Screenshot (90).png>)

# GROUPBY:

whenevere we want to drill down to the next level then we need groupby.

if there is "every" then we need "GROUPBY"

what we are grouping we need to use that grouping(column) in the select statement also

# HAVING:

The HAVING applied to the grouped rows.

### ORDER of execution:

SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
JOIN another_table
ON mytable.column = another_table.column
WHERE constraint_expression
GROUP BY column
HAVING constraint_expression
ORDER BY column ASC/DESC
LIMIT count OFFSET COUNT;

# UPDATE:

before doing update, first we have to select the statement

# CREATING A NEW TABLE:

If there already exists a table with the same name, the SQL implementation will usually throw an error, so to suppress the error and skip creating a table if one exists, you can use the IF NOT EXISTS clause.

## DATATYPES:

1. INTEGER
2. BOOLEAN
3. FLOAT:stores upto 3 precision points
4. DOUBLE: stores upto 6 precision points
5. REAL:stores upto 12 precision points
6. CHARACTER(num_chars):stores few characters(eg. gender)
7. VARCHAR(num_chars):stores few sentences(eg. twitter tweets fixed length)
8. TEXT:stores large amount of data(eg. paragraphs)
9. DATE:stores only date
10. DATETIME:stores date and time
11. BLOB:stores binary data,images,videos

## sql server DATATYPES:

1.  integer:
    1.1 int(-2B,2B)
    1.2 smallint(-32k , 32k)
    1.3 bigint(-9*10^8,9*10^8)

2.  String:
    2.1 varchar:it stores 2 unicode for 1 letter
    it will give you maximum space
    2.2 nvarchar:it stores 1 unicode for 1 letter
    it will give you maximum space
    supports multiple languages

    instead of tex datatype we need to use(varchar(max),nvarchar(max))

3.  Decimal:
    3.1 decimal: gives exact value
    less performance
    3.2 float : gives approx value
    loose decimal points
    gives better performance

4.  Boolean: it stores in the bit form

## constraints:

constraints validate whether our data is good or not

1. PRIMARY KEY: unique value(eg.phno,pan no)
2. AUTOINCREMENT:whenever we mark a column as autoincrement it will automatically incremented
3. UNIQUE:
4. NOT NULL:
5. Check(expression):performs validation(eg age checking before voting and driving)
6. FORIEGN KEY:
   6.1 deleting: first we have to delete the data in foreign key and then we have to delete the data in primary key table.
   6.2 insertion: first we have to insert in primary key table and the we have to insert in foreign key table.

![alt text](<Screenshot (93).png>)

# DDL( Data Definition Language):

1. CREATE Command
2. DROP Command:The DROP command is used to remove the whole database or table indexes, data, and more.
3. ALTER Command
4. TRUNCATE Command:The TRUNCATE command is used to remove all the rows from the table.
5. RENAME Command

# DML( Data Manipulation Language):

1. SELECT Command
2. INSERT Command
3. UPDATE Command
4. DELETE Command

# TCL( Transaction control language):

1. COMMIT
2. ROLLBACK
3. SAVEPOINT

# Alter:

## Altering table to add new column(s):

ALTER TABLE mytable
ADD column DataType OptionalTableConstraint
DEFAULT default_value;

# DROP:

in sql if we use GROUP BY then we have to use aggregate function

## databse commands:

create database db_name
use db_name;

# FUUNCTIONS:

1. Agg functions
2. string functions:  
   1.len
   2.left
   3.Right
   4.subString:we cannot give negative values.  
    string values starts with 1
   5.Upper
   6.Lower
   7.Ltrim
   8.Rtrim
   9.CharIndex:it will return the position of the word
   it will return 0 if htere is no word
   10.Replace
   11.concat
   12.Replace
   13.Replicate
   14.Reverse

select len('ashi') as NameLength;// returns length

select Left('ashi',2);// returns characters from left side of string

select right('ashi',2);// returns characters from right side of string

select SUBSTRING('ashritha',2,5);// returns the substring

select UPPER('ashi');//converts to uppercase

select lower('ASHI');//converts to lower case

select Ltrim(' ashritha mopuri');// removes spaces from left side

select Rtrim('ashritha mopuri ');// removes spaces from right side

select Rtrim('ashritha ','tha ');

select Rtrim('ashritha','tha');

select CHARINDEX('i','ashritha');//return character position

select REPLACE('ashritha','a','b');// replace the string

select CONCAT('ashritha','mopuri');// concates two strings

select REPLICATE('ashi',5);// repeats the string no of times

select REVERSE('ashi');

![alt text](<Screenshot (97).png>)
![alt text](<Screenshot (98).png>)

3. mathametical functions:
   1. Abs: returns positive value if negative value is given
   2. Power
   3. Round
   4. Ceiling
   5. Floor

select ABS(-343);// return negative value to positive value

select POWER(2,3);//return the number

select ROUND(38.525,2);// return the rounded number

select CEILING(38.325);// return next number

select FLOOR(38.325);// return previous number

![alt text](<Screenshot 2024-06-13 124922.png>)

4. DATE FUNCTIONS:
   1. GetDate
   2. DateAdd
   3. DateDiff
   4. Format
   5. DatePart: extracts part of the date

select DATEPART(month , GETDATE());

select DATEPART(DAY, GETDATE());

select GETDATE()

select DATEADD(day , 10 ,GETDATE());

select DATEDIFF(day,'2024-01-01','2024-06-13');

select DATEDIFF(day,'2024-01-01',getdate());

select DATEDIFF(month,'2024-01-01',getdate());

select format(getdate(),'dd/MM/yyyy');

select format(getdate(),'dd/MMM/yyyy');

![alt text](<Screenshot 2024-06-13 130554.png>)
S![alt text](<Screenshot 2024-06-13 130619.png>)

5. format functions:

   1. cast
   2. convert

# nested sub queries

# co-related sub queries

# operators:

1. All:

2. Any
3. Exists

# GROUPING SETS:

# roll up and cube:

## roll up:

roll up group by 1 column

if we have n columns then we get (n+1) combinations

n->columns

## cube:

cube give all the possible combinations

if we have n columns then we get 2^n combinations

![alt text](<Screenshot (130).png>)

n->columns

# ranking functions:

1. rank
2. Dense_Rank
3. Row_Number

# ERD

1.provides the visual representation 2. bring same platform 3. non-technical people can easily understand

TransactionID | Date | ProductName | Category | Price | StoreName | City | Country | |---------------|------------|-------------|-----------|-------|-----------|------------|---------| | 1 | 2024-04-01 | Laptop | Electronics | 1200 | TechWorld | San Francisco | USA | | 2 | 2024-04-01 | Smartphone | Electronics | 800 | TechWorld | San Francisco | USA | | 3 | 2024-04-02 | Jeans | Apparel | 40 | FashionFiesta | New York | USA |

**\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\***XML\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***

xml auto:add attributes
select \* from table_name for XML AUTO

xml path:we get keys. nesting can be done (/)
select \* from table_name for XML Path

select movieid,titlt,yesr,directorId from movies for xml

select movieid,titlt,yesr,directorId from movies for xml path ('movie'), root

select movieid,titlt,yesr,directorId from movies for xml path ('movie'), root('movies')

# custom validation:

"check" is the custom constraint

## why constrainsta should be given name?

1. if we want to update or delete the constraint it will be helpful

2. to debug easily

# JSON:

older version of json is xml

![alt text](<Screenshot (150).png>)

in json there is no atrribute

in json auto:

in json path:nesting can be done using (.)

## keys:

DATABASE KEYS

1. Primary key
2. Foreign key
3. Candidate key => columns that are eligible to become primary key
4. ALternate key => The keys that are eligible to become primary key other than primary key
5. Alternate Key = Candidate key - primary key
6. Composite key
7. Super key => group of single or multiple keys which indentifies rows in a table.
8. In super key each column is a primary key
9. in composite key combination of columns is a primary key
10. Super Key => Primary Key , Candidate Key , Alternate Key

candidate key has unique values eligible to become pk (alternate+pk)

alternate key=ck-pk

super key=

## cross join:

in natural join, no need to mention "on" condition.the column names must be same in both tables

in equi join,condition should be mentioned, condition should be always "="

in inner join , we can use >,< conditions

in self join, we combine to itself

## cast and convert:

in cast first we give the value which we convert and second part will be the type we want to convert.

select cast(42.6 as int);

in convert first we will give the type we want to convert and second part will be the value we give

styling code

select convert(int,26.64);

# functions:

1. custom function gives u single value
2. can take parameters

## syntax:

create function dbo.CalculateAge(@ReleaseDate Int)
Returns Int  
as
Begin

        Return year(getdate())  @ReleaseDate;

End;

## declaring a variable:

Declare @movie_id Int;  
set @movie_id = 3;

there is no primary key we keep composite key

super key each columns are primary key

# views:

1. creates a virtual view but does not create a new table shows the existing table.
2. copy by refernces
3. complex statement - create view - easily readability
4. abstraction: hides the unwanted data(complex)
5. security-hides the data
6. whenever we create view we use "vw" before viewname
7. views cannot take parameters

itvf/mtvf  
inline table valued function

scalar function:returns int,date  
table valued function:
m

## scalar function:

scalar functions will be useful in the place of "column names".

## inline tvf:

create function dbo.GetMOvieByGenre(@genre varchar(30))  
return table  
as  
return {  
select \* from movies where genere= @genre('action')  
}

select \* from dbo.getmovieByGenre('action')

## mtvf:

create function dbo.GetMOviesAfter2015()  
returns @LatestDecadeMovies Table(title varchar (50),releaseyear int,genre varchar(20))  
as  
begin  
insert into @LatestDecadeMovies  
select title,releaseyear,genre from movies where ReleaseYear>2015

return;
end

no need to pass the values

# CASE:

select \*,
case  
when ReleaseYear >= 2020 then 'latest'  
when ReleaseYear >= 2010 then 'old'  
end as category  
from movies;

# STORED PROCEDURES:

in fuction we cannot access the the tables which are not mentioned  
in stored procedures we can access all the tables

declare @orderAmount decimal(10,2)

if @orderAmount > 1000  
Begin  
print 'applying 10% discount'  
end  
else  
begin  
print 'no discount'  
end

---

declare @counter int =10

while @counter > 0  
begin  
print @counter  
set @counter=@counter-1;  
end

---

## creating procedures:

create Procedure spGetMoviesByGenre  
@Genre nvarchar(20)  
as  
Begin  
select \* from movies  
where Genre=@Genre;  
end

execute spGetMoviesByGenre 'Action'  
exec spGetMoviesByGenre 'Action'

exec sp_helptext GetMoviesByGenre -> descripbes the structure

EXEC sp_rename 'HumanResources.uspGetAllEmployeesTest', 'uspEveryEmployeeTest';

# MONGOdB:

1.  GOOD AT READING AND RETRIVAL
2.  slow at insertion
3.  Retrival fast

## indexing in sql:

1. fast data retrival
2. determines the order of the table

execution plan is used to determine the speed
sub tree cost is used to determine the speed

if create more indexes, it will slow down insertion and deletion process by creating a more clustered tables.if we insert a record we have to insert the new row in all non clustered tables.

it does the grouping(i.e.,spliting the data).  
we have cluster index in our db by default.  
cluster index are the table which are in ordered.

in any db, we will have reading speed inversly proportional to insertion
to increase the reading spped we need to tune it by indexing.

Exec sp_helpindex employess

## clustered :

1. (pk)
2. (decides table order)
3. (only one per table)

in cluster the data will be divided into groups
if there is no order, it will serach each row called index scan.

## non-clustered:

1. (non pk)
2. does not decide table order
3. many per tables

if we have n non-clustered tables,deletion will take time because all the non clustered tables (n+1) must also be deleted

in non clustrered, reading spped is fast and insertion and deletion is slow

drop index index_name on table_name

clustered determines the table order

# unique vs non-unique index:

if the column is unique and we apply index then it will become unique index

# ACID PROPERTIES:

1.  Atomicity :

talks about before the transaction.

both the operations should be completed or both should be failed.

2. Consistency:

cannot have host data

if we have removed from one table it should be added to another table

the changes should be reflected everywhere.

it cannot have ghost data

3. Isolation:

lock only the rows that are affected(ticket booking)

4. Durability:

after the transaction.

in case of failure we will do a roll back

![alt text](<Screenshot (179).png>)

## isolation level->read committed(default)

set transaction isolation level read uncommited

## rollback:

undo the action

## commit:

end the transactions.

# GO:

Batch set of SQL commands.

error number starts from 50000

# indexing:

when we want to filter the frequently usd data then we index

create index IX_Filtered_year
on movies(title)
where releaseYear - 2020

exec sp_helpindex movies

-----for performance checking

alter index index_name on table_name disable;

alter index index_name on table_name rebuild;

---------rename

exec sp_rename 'table_name.oldname' , 'newname'

sp_rename -> proc,Tables,columns.

# COALESCE:

returns the first not null values

select @@version as SQLServerVersion

## user data types:

create type phonenumberfrom varchar(15) not null

## parse the xml document:

EXEC sp_xml_preparedocument @xmlDoc output, @xmlData
