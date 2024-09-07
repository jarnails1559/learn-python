import CodeBlock from '@/components/CodeBlock'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'
import InteractiveDemo from '@/components/InteractiveDemo'
import Quiz from '@/components/Quiz'

const subtopics = [
  { title: 'Print Function', url: '#print-function' },
  { title: 'Input Function', url: '#input-function' },
  { title: 'Formatting Output', url: '#formatting-output' },
]

export default function InputOutputPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Basic Input and Output in Python</h1>
      
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Did you know?</AlertTitle>
        <AlertDescription>
          In Python 3, <code>print</code> is a function, while in Python 2 it was a statement.
        </AlertDescription>
      </Alert>

      <section id="print-function">
        <h2 className="text-3xl font-bold mb-4">Print Function</h2>
        <p className="text-lg mb-4">
          The <code>print()</code> function is used to display text, variables, and other data to the console. It can take multiple arguments and will output them separated by a space by default.
        </p>
        <p className="text-lg mb-4">
          Here are some basic examples of using <code>print()</code>:
        </p>
        <CodeBlock
          code={`
# Basic print
print("Hello, World!")

# Printing multiple items
name = "Alice"
age = 30
print("Name:", name, "Age:", age)

# Printing without a newline at the end
print("Hello,", end=" ")
print("World!")
          `}
          language="python"
        />
        <p className="text-lg mt-4">
          The <code>end</code> parameter in the <code>print()</code> function allows you to specify what is printed at the end of the output. By default, it is set to <code>"\\n"</code>, which adds a newline.
        </p>
        <InteractiveDemo
          code={`# Using print() function
print("Hello, World!")  # Output: Hello, World!

# Multiple arguments in print()
name = "Alice"
age = 30
print("Name:", name, "Age:", age)  # Output: Name: Alice Age: 30

# Changing the end parameter
print("Hello,", end=" ")
print("World!")  # Output: Hello, World!
`}
          language="python"
        />
      </section>

      <section id="input-function">
        <h2 className="text-3xl font-bold mb-4">Input Function</h2>
        <p className="text-lg mb-4">
          The <code>input()</code> function allows you to get user input from the console.
        </p>
        <InteractiveDemo
          code={`# Getting user input
name = input("Enter your name: ")
print("Hello,", name)

# Getting numeric input
age = int(input("Enter your age: "))
print("In 5 years, you will be", age + 5)
`}
          language="python"
        />
      </section>

      <section id="formatting-output">
        <h2 className="text-3xl font-bold mb-4">Formatting Output</h2>
        <p className="text-lg mb-4">
          Python provides several methods to format strings, which can be used to produce more readable and informative output.
        </p>
        <p className="text-lg mb-4">
          Here are the main ways to format strings in Python:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>f-strings (formatted string literals)</strong>: Available from Python 3.6 onwards, this method allows for embedding expressions inside string literals using curly braces.</li>
          <li><strong>.format() method</strong>: Available from Python 2.7 and Python 3.0 onwards, this method allows you to format strings by specifying placeholders.</li>
          <li><strong>% operator</strong>: The old-style string formatting method, which is similar to the printf function in C.</li>
        </ul>
        <CodeBlock
          code={`
# Using f-strings (Python 3.6+)
name = "Alice"
age = 30
print(f"{name} is {age} years old")

# Using .format() method
print("{} is {} years old".format(name, age))

# Using % operator (older style)
print("%s is %d years old" % (name, age))
          `}
          language="python"
        />
        <p className="text-lg mt-4">
          Each method has its use cases. F-strings are the most modern and efficient way to format strings, while the <code>.format()</code> method and <code>%</code> operator are useful for maintaining compatibility with older versions of Python.
        </p>
        <InteractiveDemo
          code={`# Using f-strings
name = "Alice"
age = 30
print(f"{name} is {age} years old")  # Output: Alice is 30 years old

# Using .format() method
print("{} is {} years old".format(name, age))  # Output: Alice is 30 years old

# Using % operator
print("%s is %d years old" % (name, age))  # Output: Alice is 30 years old
`}
          language="python"
        />
      </section>

      <Card id="practice-exercise" className="mt-8">
        <CardHeader>
          <CardTitle>Practice Exercise</CardTitle>
          <CardDescription>Enhance your understanding of input and output functions by completing the tasks below. Use the provided code snippets as a starting point and experiment with different inputs and outputs.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractiveDemo
            code={`# Practice with print() and input() functions

# Print different types of data
print("Welcome to Python programming!")
print(3.14, "is the value of pi.")
print("Your favorite number is", 42)

# Get user input and format output
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"Hello, {name}! You are {age} years old.")
print("In 10 years, you will be", age + 10)
`}
            language="python"
          />
        </CardContent>
      </Card>

      <Quiz
        question="Which of the following methods is used to format strings in Python?"
        answers={[
          "f-strings",
          ".format() method",
          "% operator",
          "print() function"
        ]}
        correctAnswer="print() function"
        explanation="While the print() function is used to output text and variables, it is not a string formatting method. F-strings, .format() method, and % operator are used for formatting strings."
      />
    </div>
  )
}

InputOutputPage.subtopics = subtopics
