import CodeBlock from '@/components/CodeBlock'
import MermaidDiagram from '@/components/MermaidDiagram'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'
import InteractiveDemo from '@/components/InteractiveDemo'
import Quiz from '@/components/Quiz'
import VisualExample from '@/components/VisualExample'

const subtopics = [
  { title: 'What are Variables?', url: '#what-are-variables' },
  { title: 'Variable Types', url: '#variable-types' },
  { title: 'Variable Scope', url: '#variable-scope' },
  { title: 'Practice Exercise', url: '#practice-exercise' },
]

export default function VariablesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Python Variables</h1>
      
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Did you know?</AlertTitle>
        <AlertDescription>
          In Python, you don&apos;t need to declare a variable&apos;s type explicitly. Python is dynamically typed, which means the type is determined at runtime based on the assigned value!
        </AlertDescription>
      </Alert>

      <section id="what-are-variables">
        <h2 className="text-3xl font-bold mb-4">What are Variables?</h2>
        <p className="text-lg mb-4">
          In Python, a variable is a symbolic name that is bound to a value. It is essentially a label that you can use to refer to data that you want to work with in your program. Variables are fundamental to programming because they allow you to store, modify, and retrieve data as needed.
        </p>
        <p className="text-lg mb-4">
          Variables in Python are created the moment you first assign a value to them. Unlike statically typed languages where you have to declare the type of the variable before using it, Python handles types automatically. This is known as dynamic typing. For example:
        </p>
        <InteractiveDemo
          code={`# Example of variable assignment
name = "Alice"  # String variable
age = 30        # Integer variable
height = 1.75   # Float variable

# Print the values of the variables
print(f"{name} is {age} years old and {height} meters tall.")
`}
          language="python"
        />
        <p className="text-lg mt-4">
          In the example above, <code>name</code> is a variable that stores a string, <code>age</code> is an integer, and <code>height</code> is a float. You can use these variables in expressions and functions throughout your code.
        </p>
        <p className="text-lg mb-4">
          Variables are useful because they allow you to write flexible and reusable code. Instead of hardcoding values directly into your program, you can use variables to store and manipulate data dynamically.
        </p>
      </section>

      <VisualExample
        title="Variable Assignment Visualization"
        description="This diagram illustrates how variables map to different types of data."
        visual={`
          graph LR
            A[name] --> B["Alice"]
            C[age] --> D[30]
            E[height] --> F[1.75]
        `}
      />

      <section id="variable-types">
        <h2 className="text-3xl font-bold mb-4">Variable Types</h2>
        <p className="text-lg mb-4">
          Python supports a variety of data types. Each type serves a different purpose and is used to store different kinds of data. Here's an overview of the main types:
        </p>
        <Tabs defaultValue="numeric">
          <TabsList>
            <TabsTrigger value="numeric">Numeric</TabsTrigger>
            <TabsTrigger value="sequence">Sequence</TabsTrigger>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="mapping">Mapping</TabsTrigger>
            <TabsTrigger value="set">Set</TabsTrigger>
            <TabsTrigger value="boolean">Boolean</TabsTrigger>
          </TabsList>
          <TabsContent value="numeric">
            <Card>
              <CardHeader>
                <CardTitle>Numeric Types</CardTitle>
                <CardDescription>Includes int, float, and complex numbers.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">Numeric types are used for mathematical operations and calculations. Python has the following numeric types:</p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>Integer</strong>: Represents whole numbers. E.g., 5, -42</li>
                  <li><strong>Float</strong>: Represents decimal numbers. E.g., 3.14, -0.001</li>
                  <li><strong>Complex</strong>: Represents numbers with a real and imaginary part. E.g., 1 + 2j</li>
                </ul>
                <CodeBlock
                  code={`
# Integer
x = 5
print(x)  # Output: 5

# Float
y = 3.14
print(y)  # Output: 3.14

# Complex
z = 1 + 2j
print(z)  # Output: (1+2j)
                  `}
                  language="python"
                />
                <p className="text-lg mt-4">
                  You can perform various operations on numeric types, such as addition, subtraction, multiplication, and division. For example:
                </p>
                <CodeBlock
                  code={`
a = 10
b = 3
sum_result = a + b  # Addition
diff_result = a - b  # Subtraction
prod_result = a * b  # Multiplication
quot_result = a / b  # Division

print("Sum:", sum_result)       # Output: Sum: 13
print("Difference:", diff_result)  # Output: Difference: 7
print("Product:", prod_result)  # Output: Product: 30
print("Quotient:", quot_result)  # Output: Quotient: 3.3333333333333335
                  `}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sequence">
            <Card>
              <CardHeader>
                <CardTitle>Sequence Types</CardTitle>
                <CardDescription>Includes list, tuple, and range.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">Sequence types store ordered collections of items. These collections can be indexed and iterated over. Here's a closer look at each type:</p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>List</strong>: A mutable sequence of items. Lists can hold items of different types and can be modified. E.g., [1, "hello", 3.14]</li>
                  <li><strong>Tuple</strong>: An immutable sequence of items. Tuples cannot be changed after creation. E.g., (1, "world", 3.14)</li>
                  <li><strong>Range</strong>: Represents a sequence of numbers, often used in loops. E.g., range(5) generates numbers from 0 to 4</li>
                </ul>
                <CodeBlock
                  code={`
# List
fruits = ["apple", "banana", "cherry"]
print(fruits)  # Output: ['apple', 'banana', 'cherry']

# Tuple
coordinates = (10, 20)
print(coordinates)  # Output: (10, 20)

# Range
numbers = range(5)
print(list(numbers))  # Output: [0, 1, 2, 3, 4]
                  `}
                  language="python"
                />
                <p className="text-lg mt-4">
                  Lists and tuples support indexing, slicing, and iteration, making them versatile for data storage and manipulation. For example:
                </p>
                <CodeBlock
                  code={`
# Accessing list elements
print(fruits[0])  # Output: apple
print(fruits[1:3])  # Output: ['banana', 'cherry']

# Accessing tuple elements
print(coordinates[1])  # Output: 20

# Iterating over a list
for fruit in fruits:
    print(fruit)
                  `}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="text">
            <Card>
              <CardHeader>
                <CardTitle>Text Type</CardTitle>
                <CardDescription>Includes str for strings.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">Text types are used for representing and manipulating text. The primary text type in Python is:</p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>String (str)</strong>: Represents a sequence of characters. Strings can be enclosed in single quotes, double quotes, or triple quotes for multi-line strings. E.g., &quot;hello&quot;, &apos;world&apos;</li>
                </ul>
                <CodeBlock
                  code={`
# String
name = "Alice"
print(name)  # Output: Alice

# Multi-line string
message = """
Hello,
World!
"""
print(message)
                  `}
                  language="python"
                />
                <p className="text-lg mt-4">
                  Strings support various operations like concatenation, repetition, and slicing. For example:
                </p>
                <CodeBlock
                  code={`
greeting = "Hello"
name = "Alice"
full_message = greeting + ", " + name  # Concatenation
print(full_message)  # Output: Hello, Alice

repeated_message = greeting * 3  # Repetition
print(repeated_message)  # Output: HelloHelloHello

# Slicing
print(full_message[0:5])  # Output: Hello
                  `}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mapping">
            <Card>
              <CardHeader>
                <CardTitle>Mapping Type</CardTitle>
                <CardDescription>Includes dict for dictionaries.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">Mapping types represent collections of key-value pairs. The primary mapping type in Python is:</p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>Dictionary (dict)</strong>: A mutable collection of key-value pairs. Keys must be unique and immutable. E.g., {`{"name": "Alice", "age": 30}`}</li>
                </ul>
                <CodeBlock
                  code={`
# Dictionary
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}
print(person)  # Output: {'name': 'Alice', 'age': 30, 'city': 'New York'}

# Accessing values
print(person["name"])  # Output: Alice

# Adding a new key-value pair
person["occupation"] = "Engineer"
print(person)
                  `}
                  language="python"
                />
                <p className="text-lg mt-4">
                  Dictionaries are useful for storing related pieces of information. They support operations like adding, updating, and deleting key-value pairs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="set">
            <Card>
              <CardHeader>
                <CardTitle>Set Types</CardTitle>
                <CardDescription>Includes set and frozenset.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">Sets are collections of unique elements. They are useful when you need to store non-redundant items. Python supports the following set types:</p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>Set</strong>: A mutable collection of unique items. E.g., {`{"apple", "banana", "cherry"}`}</li>
                  <li><strong>Frozenset</strong>: An immutable version of a set. E.g., {`frozenset({"apple", "banana", "cherry"})`}</li>
                </ul>
                <CodeBlock
                  code={`
# Set
fruits = {"apple", "banana", "cherry"}
print(fruits)  # Output: {'cherry', 'apple', 'banana'}

# Frozenset
frozen_fruits = frozenset(["apple", "banana", "cherry"])
print(frozen_fruits)  # Output: frozenset({'cherry', 'apple', 'banana'})
                  `}
                  language="python"
                />
                <p className="text-lg mt-4">
                  Sets support operations like union, intersection, and difference, and are useful for removing duplicates from collections.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="boolean">
            <Card>
              <CardHeader>
                <CardTitle>Boolean Type</CardTitle>
                <CardDescription>Includes bool for boolean values.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">The boolean type represents truth values. There are only two boolean values in Python:</p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>True</strong>: Represents a true condition.</li>
                  <li><strong>False</strong>: Represents a false condition.</li>
                </ul>
                <CodeBlock
                  code={`
# Boolean
is_python_fun = True
is_java_fun = False
print(is_python_fun)  # Output: True
print(is_java_fun)  # Output: False
                  `}
                  language="python"
                />
                <p className="text-lg mt-4">
                  Booleans are often used in conditional statements and loops to control the flow of the program. For example:
                </p>
                <CodeBlock
                  code={`
# Conditional statement
if is_python_fun:
    print("Python is fun!")
else:
    print("Python is not fun.")

# Output: Python is fun!
                  `}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="variable-scope">
        <h2 className="text-3xl font-bold mb-4">Variable Scope</h2>
        <p className="text-lg mb-4">
          Variable scope refers to the region of code where a variable is accessible. Understanding scope is crucial for avoiding errors and managing variables effectively. Python has two primary types of variable scope:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Global Scope</strong>: Variables defined outside of any function or class. They are accessible from any part of the code.</li>
          <li><strong>Local Scope</strong>: Variables defined inside a function or block. They are only accessible within that function or block.</li>
        </ul>
        <MermaidDiagram chart={`
          graph TD
            A[Variable Scope] --> B[Global Scope]
            A --> C[Local Scope]
            B --> D[Defined outside functions]
            C --> E[Defined inside functions]
        `} />
        <CodeBlock
          code={`
# Global variable
global_var = "I'm global"

def my_function():
    # Local variable
    local_var = "I'm local"
    print(local_var)  # Output: I'm local
    print(global_var)  # Output: I'm global

my_function()
print(global_var)  # Output: I'm global
# print(local_var)  # This would raise an error because local_var is not accessible outside the function
          `}
          language="python"
        />
        <p className="text-lg mt-4">
          In the example above, <code>global_var</code> is defined outside of any function, making it accessible anywhere in the code. In contrast, <code>local_var</code> is defined inside <code>my_function</code> and can only be used within that function.
        </p>
      </section>

      <Card id="practice-exercise" className="mt-8">
        <CardHeader>
          <CardTitle>Practice Exercise</CardTitle>
          <CardDescription>Challenge yourself by creating and manipulating variables of different types. Use the code snippets provided to test your understanding.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractiveDemo
            code={`# Practice creating and manipulating variables

# Get user input for a string variable
name = input("Enter your name: ")

# Get user input for an integer variable
age = int(input("Enter your age: "))

# Create a float variable
height = 1.75

# Create a list
favorite_colors = ["red", "blue", "green"]

# Print all variables
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Favorite colors: {favorite_colors}")

# Perform some operations
print(f"In 10 years, you will be {age + 10} years old")
print(f"Your name has {len(name)} characters")
print(f"Your first favorite color is {favorite_colors[0]}")
`}
            language="python"
            hasInput={true}
          />
        </CardContent>
      </Card>

      <Quiz
        question="Which of the following is NOT a valid variable name in Python?"
        answers={[
          "my_variable",
          "MyVariable",
          "2variable",
          "_variable"
        ]}
        correctAnswer="2variable" explanation={''}      />
    </div>
  )
}

VariablesPage.subtopics = subtopics
