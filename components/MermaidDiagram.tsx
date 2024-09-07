'use client'

import React, { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [svgContent, setSvgContent] = useState<string>('')

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: 'default' })
    
    const renderChart = async () => {
      if (ref.current) {
        const { svg } = await mermaid.render('mermaid-svg', chart)
        setSvgContent(svg)
      }
    }

    renderChart()
  }, [chart])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: svgContent }} />
}