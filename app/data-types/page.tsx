import CodeBlock from '@/components/CodeBlock'
import MermaidDiagram from '@/components/MermaidDiagram'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'
import InteractiveDemo from '@/components/InteractiveDemo'
import VisualExample from '@/components/VisualExample'
import Quiz from '@/components/Quiz'

const subtopics = [
  { title: 'Numeric Data Types', url: '#numeric-data-types' },
  { title: 'Sequence Data Types', url: '#sequence-data-types' },
  { title: 'Text Data Types', url: '#text-data-types' },
  { title: 'Mapping Data Types', url: '#mapping-data-types' },
  { title: 'Set Data Types', url: '#set-data-types' },
  { title: 'Boolean Data Types', url: '#boolean-data-types' },
]

export default function DataTypesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Python Data Types</h1>
      
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Did you know?</AlertTitle>
        <AlertDescription>
          Python is dynamically typed, which means you don’t have to declare the type of a variable when you create it. Python infers the type based on the value assigned.
        </AlertDescription>
      </Alert>

      <section id="numeric-data-types">
        <h2 className="text-3xl font-bold mb-4">Numeric Data Types</h2>
        <p className="text-lg mb-4">
          Numeric data types in Python include integers, floating-point numbers, and complex numbers. These types are used for arithmetic operations and mathematical computations.
        </p>
        <MermaidDiagram chart={`
          graph TD
            A[Numeric Data Types] --> B[Integer]
            A --> C[Float]
            A --> D[Complex]
            B --> E[Whole numbers (e.g., 5, -3)]
            C --> F[Decimal numbers (e.g., 3.14, -0.001)]
            D --> G[Complex numbers (e.g., 2 + 3j)]
        `} />
        <Tabs defaultValue="integer">
          <TabsList>
            <TabsTrigger value="integer">Integer</TabsTrigger>
            <TabsTrigger value="float">Float</TabsTrigger>
            <TabsTrigger value="complex">Complex</TabsTrigger>
          </TabsList>
          <TabsContent value="integer">
            <Card>
              <CardHeader>
                <CardTitle>Integer (int)</CardTitle>
                <CardDescription>Whole numbers without a decimal point</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# Integer Example
number_of_apples = 5
print("Number of apples:", number_of_apples)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="float">
            <Card>
              <CardHeader>
                <CardTitle>Float (float)</CardTitle>
                <CardDescription>Numbers with a decimal point</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# Float Example
price_of_item = 19.99
print("Price of item:", price_of_item)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="complex">
            <Card>
              <CardHeader>
                <CardTitle>Complex (complex)</CardTitle>
                <CardDescription>Numbers with a real and imaginary part</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# Complex Example
complex_number = 2 + 3j
print("Complex number:", complex_number)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="sequence-data-types">
        <h2 className="text-3xl font-bold mb-4">Sequence Data Types</h2>
        <p className="text-lg mb-4">
          Sequence data types include lists, tuples, and ranges. These types are used to store collections of items. Lists and tuples can contain elements of different types, while ranges are used to generate sequences of numbers.
        </p>
        <MermaidDiagram chart={`
          graph TD
            A[Sequence Data Types] --> B[List]
            A --> C[Tuple]
            A --> D[Range]
            B --> E[Ordered and mutable (e.g., [1, 2, 3])]
            C --> F[Ordered and immutable (e.g., (1, 2, 3))]
            D --> G[Generate a sequence of numbers (e.g., range(5))]
        `} />
        <Tabs defaultValue="list">
          <TabsList>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="tuple">Tuple</TabsTrigger>
            <TabsTrigger value="range">Range</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <Card>
              <CardHeader>
                <CardTitle>List (list)</CardTitle>
                <CardDescription>Ordered and mutable collection of items</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# List Example
fruits = ["apple", "banana", "cherry"]
print("Fruits list:", fruits)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tuple">
            <Card>
              <CardHeader>
                <CardTitle>Tuple (tuple)</CardTitle>
                <CardDescription>Ordered and immutable collection of items</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# Tuple Example
coordinates = (10, 20)
print("Coordinates tuple:", coordinates)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="range">
            <Card>
              <CardHeader>
                <CardTitle>Range (range)</CardTitle>
                <CardDescription>Generate a sequence of numbers</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# Range Example
numbers = range(5)
print("Range sequence:", list(numbers))
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="text-data-types">
        <h2 className="text-3xl font-bold mb-4">Text Data Types</h2>
        <p className="text-lg mb-4">
          The text data type in Python is used for handling strings. Strings are sequences of characters enclosed in quotes.
        </p>
        <MermaidDiagram chart={`
          graph TD
            A[Text Data Types] --> B[String]
            B --> C[Single quotes (e.g., 'hello')]
            B --> D[Double quotes (e.g., "world")]
            B --> E[Triple quotes (e.g., """hello world""")]
        `} />
        <Card>
          <CardHeader>
            <CardTitle>String (str)</CardTitle>
            <CardDescription>Sequence of characters enclosed in quotes</CardDescription>
          </CardHeader>
          <CardContent>
            <InteractiveDemo
              code={`# String Example
single_quote_str = 'Hello'
double_quote_str = "World"
multi_line_str = """Hello
World"""
print(single_quote_str)
print(double_quote_str)
print(multi_line_str)
`}
              language="python"
            />
          </CardContent>
        </Card>
      </section>

      <section id="mapping-data-types">
        <h2 className="text-3xl font-bold mb-4">Mapping Data Types</h2>
        <p className="text-lg mb-4">
          The mapping data type in Python is used for storing key-value pairs. The most common mapping type is the dictionary.
        </p>
        <MermaidDiagram chart={`
          graph TD
            A[Mapping Data Types] --> B[Dictionary]
            B --> C[Key-value pairs (e.g., {'key': 'value'})]
        `} />
        <Card>
          <CardHeader>
            <CardTitle>Dictionary (dict)</CardTitle>
            <CardDescription>Collection of key-value pairs</CardDescription>
          </CardHeader>
          <CardContent>
            <InteractiveDemo
              code={`# Dictionary Example
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}
print("Person dictionary:", person)
`}
              language="python"
            />
          </CardContent>
        </Card>
      </section>

      <section id="set-data-types">
        <h2 className="text-3xl font-bold mb-4">Set Data Types</h2>
        <p className="text-lg mb-4">
          The set data type in Python is used to store collections of unique items. Sets are unordered and do not allow duplicate values.
        </p>
        <MermaidDiagram chart={`
          graph TD
            A[Set Data Types] --> B[Set]
            B --> C[Unordered collection of unique items (e.g., {1, 2, 3})]
        `} />
        <Card>
          <CardHeader>
            <CardTitle>Set (set)</CardTitle>
            <CardDescription>Collection of unique items</CardDescription>
          </CardHeader>
          <CardContent>
            <InteractiveDemo
              code={`# Set Example
unique_numbers = {1, 2, 3, 3, 4}
print("Unique numbers set:", unique_numbers)
`}
              language="python"
            />
          </CardContent>
        </Card>
      </section>

      <section id="boolean-data-types">
        <h2 className="text-3xl font-bold mb-4">Boolean Data Types</h2>
        <p className="text-lg mb-4">
          The boolean data type represents one of two values: True or False. It is commonly used in conditional statements and logical operations.
        </p>
        <MermaidDiagram chart={`
          graph TD
            A[Boolean Data Types] --> B[Boolean]
            B --> C[True]
            B --> D[False]
        `} />
        <Card>
          <CardHeader>
            <CardTitle>Boolean (bool)</CardTitle>
            <CardDescription>Represents True or False values</CardDescription>
          </CardHeader>
          <CardContent>
            <InteractiveDemo
              code={`# Boolean Example
is_sunny = True
is_raining = False
print("Is it sunny?", is_sunny)
print("Is it raining?", is_raining)
`}
              language="python"
            />
          </CardContent>
        </Card>
      </section>

      <Quiz
        question="Which of the following is NOT a valid data type in Python?"
        answers={[
          "Integer",
          "String",
          "Dictionary",
          "Array"
        ]}
        correctAnswer="Array"
        explanation="Python does not have a built-in Array data type. Instead, lists or tuples can be used to store collections of items."
      />
    </div>
  )
}

DataTypesPage.subtopics = subtopics
