"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle2, XCircle } from 'lucide-react'

interface QuizProps {
  question: string
  answers: string[]
  correctAnswer: string
  explanation: string
  code?: string
}

export default function Quiz({ question, answers, correctAnswer, explanation, code }: QuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedAnswer) {
      setIsSubmitted(true)
    }
  }

  const isCorrect = selectedAnswer === correctAnswer

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">Quiz</CardTitle>
        <CardDescription className="text-base lg:text-lg">{question}</CardDescription>
      </CardHeader>
      <CardContent>
        {code && (
          <pre className="p-4 bg-muted rounded-md overflow-x-auto text-sm lg:text-base">
            <code>{code}</code>
          </pre>
        )}
        <RadioGroup onValueChange={setSelectedAnswer} value={selectedAnswer || ''}>
          {answers.map((answer, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <RadioGroupItem value={answer} id={`answer-${index}`} disabled={isSubmitted} />
              <Label htmlFor={`answer-${index}`} className="text-sm lg:text-base">{answer}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={handleSubmit} disabled={!selectedAnswer || isSubmitted} className="w-full sm:w-auto">
          Submit
        </Button>
        {isSubmitted && (
          <Alert variant={isCorrect ? 'default' : 'destructive'}>
            <AlertTitle className="flex items-center text-base lg:text-lg">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="mr-2" />
                  Correct!
                </>
              ) : (
                <>
                  <XCircle className="mr-2" />
                  Incorrect
                </>
              )}
            </AlertTitle>
            <AlertDescription className="text-sm lg:text-base">{explanation}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  )
}