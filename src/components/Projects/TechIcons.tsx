import { Cpu, Database, FileJson, Globe, Layers, Server, Zap } from 'lucide-react'

interface IconProps {
  className?: string
}

export function ReactIcon({ className }: IconProps) {
  return <Zap className={className} />
}

export function NextJsIcon({ className }: IconProps) {
  return <Layers className={className} />
}

export function TypeScriptIcon({ className }: IconProps) {
  return <FileJson className={className} />
}

export function TailwindIcon({ className }: IconProps) {
  return <Cpu className={className} />
}

export function NodeIcon({ className }: IconProps) {
  return <Server className={className} />
}

export function PythonIcon({ className }: IconProps) {
  return <Globe className={className} />
}

export function DatabaseIcon({ className }: IconProps) {
  return <Database className={className} />
}

export function DockerIcon({ className }: IconProps) {
  return <Layers className={className} />
}

export function SocketIcon({ className }: IconProps) {
  return <Zap className={className} />
}

export function VueIcon({ className }: IconProps) {
  return <Layers className={className} />
}

export function StripeIcon({ className }: IconProps) {
  return <Cpu className={className} />
}

