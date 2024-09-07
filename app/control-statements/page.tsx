'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'
import InteractiveDemo from '@/components/InteractiveDemo'
import Quiz from '@/components/Quiz'
import VisualExample from '@/components/VisualExample'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

const subtopics = [
  { title: 'What are Control Statements?', url: '#what-are-control-statements' },
  { title: 'Conditional Statements', url: '#conditional-statements' },
  { title: 'Looping Statements', url: '#looping-statements' },
  { title: 'Transfer Statements', url: '#transfer-statements' },
  { title: 'Practice Quiz', url: '#practice-quiz' },
  { title: 'Challenge', url: '#challenge' },
]

export default function ControlStatementsPage() {
  const { setTheme, theme } = useTheme()
  const [showHint, setShowHint] = useState(false)

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Python Control Statements</h1>
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </Button>
      </div>
      
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Did you know?</AlertTitle>
        <AlertDescription>
          Python uses indentation to define code blocks, unlike many other programming languages which use curly braces {}.
        </AlertDescription>
      </Alert>

      <section id="what-are-control-statements">
        <h2 className="text-3xl font-bold mb-4">What are Control Statements?</h2>
        <p className="text-lg mb-4">
          Control statements in Python are used to control the flow of program execution. They allow you to make decisions, repeat actions, and organize code into logical blocks.
        </p>
        <VisualExample
          title="Control Statements Overview"
          description="A visual representation of Python control statements"
          visual={`
            graph TD
              A[Control Statements] --> B[Conditional Statements]
              A --> C[Looping Statements]
              A --> D[Transfer Statements]
              B --> E[if]
              B --> F[if-else]
              B --> G[if-elif-else]
              C --> H[for loop]
              C --> I[while loop]
              D --> J[break]
              D --> K[continue]
              D --> L[pass]
          `}
        />
      </section>

      <section id="conditional-statements">
        <h2 className="text-3xl font-bold mb-4">Conditional Statements</h2>
        <Tabs defaultValue="if">
          <TabsList>
            <TabsTrigger value="if">if</TabsTrigger>
            <TabsTrigger value="if-else">if-else</TabsTrigger>
            <TabsTrigger value="if-elif-else">if-elif-else</TabsTrigger>
          </TabsList>
          <TabsContent value="if">
            <Card>
              <CardHeader>
                <CardTitle>if Statement</CardTitle>
                <CardDescription>Executes a block of code if a condition is true</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# Try changing the value of x
x = 10

if x > 0:
    print("x is positive")
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="if-else">
            <Card>
              <CardHeader>
                <CardTitle>if-else Statement</CardTitle>
                <CardDescription>Executes one block if the condition is true, another if it's false</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# Try changing the value of x
x = -5

if x > 0:
    print("x is positive")
else:
    print("x is not positive")
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="if-elif-else">
            <Card>
              <CardHeader>
                <CardTitle>if-elif-else Statement</CardTitle>
                <CardDescription>Allows you to check multiple conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`# Try changing the value of x
x = 0

if x > 0:
    print("x is positive")
elif x < 0:
    print("x is negative")
else:
    print("x is zero")
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="looping-statements">
        <h2 className="text-3xl font-bold mb-4">Looping Statements</h2>
        <Tabs defaultValue="for">
          <TabsList>
            <TabsTrigger value="for">for Loop</TabsTrigger>
            <TabsTrigger value="while">while Loop</TabsTrigger>
          </TabsList>
          <TabsContent value="for">
            <Card>
              <CardHeader>
                <CardTitle>for Loop</CardTitle>
                <CardDescription>Iterates over a sequence (list, tuple, string) or other iterable objects</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="while">
            <Card>
              <CardHeader>
                <CardTitle>while Loop</CardTitle>
                <CardDescription>Repeats a block of code while a condition is true</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`count = 0

while count < 3:
    print(count)
    count += 1
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="transfer-statements">
        <h2 className="text-3xl font-bold mb-4">Transfer Statements</h2>
        <VisualExample
          title="Transfer Statements Flow"
          description="How break, continue, and pass affect program flow"
          visual={`
            graph TD
              A[Start] --> B{Condition}
              B -->|True| C[Code Block]
              C --> D{break?}
              D -->|Yes| E[Exit Loop]
              D -->|No| F{continue?}
              F -->|Yes| B
              F -->|No| G{pass?}
              G -->|Yes| B
              G -->|No| H[Next Statement]
              H --> B
              B -->|False| E
          `}
        />
        <Tabs defaultValue="break">
          <TabsList>
            <TabsTrigger value="break">break</TabsTrigger>
            <TabsTrigger value="continue">continue</TabsTrigger>
            <TabsTrigger value="pass">pass</TabsTrigger>
          </TabsList>
          <TabsContent value="break">
            <Card>
              <CardHeader>
                <CardTitle>break Statement</CardTitle>
                <CardDescription>Terminates the loop containing it</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`for i in range(5):
    if i == 3:
        break
    print(i)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="continue">
            <Card>
              <CardHeader>
                <CardTitle>continue Statement</CardTitle>
                <CardDescription>Skips the rest of the code inside the loop for the current iteration</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`for i in range(5):
    if i == 2:
        continue
    print(i)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pass">
            <Card>
              <CardHeader>
                <CardTitle>pass Statement</CardTitle>
                <CardDescription>A null operation; nothing happens when it executes</CardDescription>
              </CardHeader>
              <CardContent>
                <InteractiveDemo
                  code={`for i in range(5):
    if i == 2:
        pass
    else:
        print(i)
`}
                  language="python"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section id="practice-quiz">
        <h2 className="text-3xl font-bold mb-4">Practice Quiz</h2>
        <Quiz
          question="What will be the output of the following code?"
          code={`
for i in range(5):
    if i == 3:
        continue
    print(i)
          `}
          answers={[
            "0 1 2 3 4",
            "0 1 2 4",
            "0 1 2",
            "1 2 4"
          ]}
          correctAnswer="0 1 2 4"
          explanation="The continue statement skips the rest of the code inside the loop for the current iteration. When i is 3, it skips printing and continues to the next iteration."
        />
      </section>

      <section id="challenge">
        <h2 className="text-3xl font-bold mb-4">Challenge</h2>
        <Card>
          <CardHeader>
            <CardTitle>FizzBuzz Challenge</CardTitle>
            <CardDescription>
              Write a program that prints the numbers from 1 to 100. But for multiples of three print &quot;Fizz&quot; instead of the number and for the multiples of five print &quot;Buzz&quot;. For numbers which are multiples of both three and five print &quot;FizzBuzz&quot;.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <InteractiveDemo
              code={`# Write your FizzBuzz solution here
for i in range(1, 101):
    # Your code here
    pass
`}
              language="python"
            />
            <Button onClick={() => setShowHint(!showHint)} className="mt-4">
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </Button>
            {showHint && (
              <Alert className="mt-4">
                <AlertTitle>Hint</AlertTitle>
                <AlertDescription>
                  Use the modulo operator (%) to check if a number is divisible by 3 or 5. Remember to check for &quot;FizzBuzz&quot; first!
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

ControlStatementsPage.subtopics = subtopics