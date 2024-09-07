import MermaidDiagram from '@/components/MermaidDiagram'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'
import InteractiveDemo from '@/components/InteractiveDemo'
import Quiz from '@/components/Quiz'
import VisualExample from '@/components/VisualExample'

const subtopics = [
  { title: 'Arithmetic Operators', url: '#arithmetic-operators' },
  { title: 'Comparison Operators', url: '#comparison-operators' },
  { title: 'Logical Operators', url: '#logical-operators' },
]

export default function OperatorsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Python Operators</h1>
      
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Did you know?</AlertTitle>
        <AlertDescription>
          Python has a special operator for exponentiation: **. For example, 2**3 is equal to 8.
        </AlertDescription>
      </Alert>

      <section>
        <h2 className="text-3xl font-bold mb-4">What are Operators?</h2>
        <p className="text-lg mb-4">
          Operators are special symbols in Python that carry out arithmetic or logical computation. The value that the operator operates on is called the operand.
        </p>
        <MermaidDiagram chart={`
          graph TD
            A[Python Operators] --> B[Arithmetic]
            A --> C[Comparison]
            A --> D[Logical]
            A --> E[Assignment]
            A --> F[Bitwise]
            A --> G[Identity]
            A --> H[Membership]
        `} />
      </section>

      <section id="arithmetic-operators">
        <h2 className="text-3xl font-bold mb-4">Arithmetic Operators</h2>
        <p className="text-lg mb-4">These are used to perform mathematical operations like addition, subtraction, multiplication, etc.</p>
        <Tabs defaultValue="addition">
          <TabsList>
            <TabsTrigger value="addition">Addition</TabsTrigger>
            <TabsTrigger value="subtraction">Subtraction</TabsTrigger>
            <TabsTrigger value="multiplication">Multiplication</TabsTrigger>
            <TabsTrigger value="division">Division</TabsTrigger>
          </TabsList>
          <TabsContent value="addition">
            <Card>
              <CardHeader>
                <CardTitle>Addition (+)</CardTitle>
                <CardDescription>Adds two operands</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`a = 5
b = 3
result = a + b
print(f"{a} + {b} = {result}")
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="subtraction">
            <Card>
              <CardHeader>
                <CardTitle>Subtraction (-)</CardTitle>
                <CardDescription>Subtracts the second operand from the first</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`a = 5
b = 3
result = a - b
print(f"{a} - {b} = {result}")
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="multiplication">
            <Card>
              <CardHeader>
                <CardTitle>Multiplication (*)</CardTitle>
                <CardDescription>Multiplies two operands</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`a = 5
b = 3
result = a * b
print(f"{a} * {b} = {result}")
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="division">
            <Card>
              <CardHeader>
                <CardTitle>Division (/)</CardTitle>
                <CardDescription>Divides the first operand by the second</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`a = 10
b = 3
result = a / b
print(f"{a} / {b} = {result}")
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="comparison-operators">
        <h2 className="text-3xl font-bold mb-4">Comparison Operators</h2>
        <p className="text-lg mb-4">These operators are used to compare values. They return either True or False according to the condition.</p>
        <VisualExample
          title="Comparison Operators Visualization"
          description="See how comparison operators work with different values"
          visual={`
            graph TD
              A[5 < 10] --> B[True]
              C[5 > 10] --> D[False]
              E[5 == 5] --> F[True]
              G[5 != 10] --> H[True]
          `}
        />
        <InteractiveDemo
          code={`# Try changing these values
x = 5
y = 10

print(f"{x} == {y}:", x == y)
print(f"{x} != {y}:", x != y)
print(f"{x} > {y}:", x > y)
print(f"{x} < {y}:", x < y)
print(f"{x} >= {y}:", x >= y)
print(f"{x} <= {y}:", x <= y)
`}
          language="python"
        />
      </section>

      <section id="logical-operators">
        <h2 className="text-3xl font-bold mb-4">Logical Operators</h2>
        <p className="text-lg mb-4">These operators are used to combine conditional statements.</p>
        <Card>
          <CardHeader>
            <CardTitle>Logical Operators</CardTitle>
            <CardDescription>and, or, not</CardDescription>
          </CardHeader>
          <CardContent>
            <InteractiveDemo
              code={`# Try changing these boolean values
a = True
b = False

print(f"{a} and {b}:", a and b)
print(f"{a} or {b}:", a or b)
print(f"not {a}:", not a)
print(f"not {b}:", not b)
`}
              language="python"
            />
          </CardContent>
        </Card>
      </section>

      <Quiz
        question="What is the result of 15 // 4 in Python?"
        answers={[
          "3",
          "3.75",
          "4",
          "3.0"
        ]}
        correctAnswer="3"
        explanation="The // operator performs floor division, which returns the largest integer less than or equal to the result of the division."
      />
    </div>
  )
}

OperatorsPage.subtopics = subtopics