
Data types in TypeScript

When you create a variable, you’re planning to give it a value. But what kind of value it can hold depends on the variable’s data type. In TypeScript, the type system defines the various data types supported by the language. The data type classification is as given below:

Built-in Datatypes:
TypeScript has some pre-defined data types:

Built-in Data Type	keyword	Description
Number	
number	It is used to represent both Integer as well as Floating-Point numbers
Boolean	
boolean	Represents true and false
String
	string	It is used to represent a sequence of characters
Void	
void	Generally used on function return-types
Null
	null	It is used when an object does not have any value
Undefined
	undefined	Denotes value given to uninitialized variable
Any	
any	If a variable is declared with any data type then any type of value can be assigned to that variable
Examples:

let a: null = null;

let b: number = 123;

let c: number = 123.456;

let d: string = ‘Geeks’;

let e: undefined = undefined;

let f: boolean = true;

let g: number = 0b111001; // Binary

let h: number = 0o436; // Octal

let i: number = 0xadf0d; // Hexa-Decimal

User-defined Data Types:
Apart from built-in data types, user can also define its own data type. User-defined types include Enumerations (enums), classes, interfaces, arrays, and tuple.

NOTE: In built-in data types,

any: is a special data-type, also the super data-type of all data types. If a variable is declared with any data type then we can assign any type value to that variable.

Examples:

let a: any = null;

let b: any =123;

let c: any = 123.456;

let d: any = ‘Geeks’;

let e: any = undefined;

let f: any = true;