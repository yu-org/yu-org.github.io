"use client"

import { Button } from "@/components/ui/button";
import { Github, Book, Boxes, Zap, Puzzle, Shield, Code2, Rocket, ExternalLink, Languages } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-bold text-2xl font-mono">禹</div>
            <span className="text-xl font-semibold">Yu</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="/zh" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
              <Languages className="w-4 h-4" />
              中文
            </a>
            <a href="https://yu-org.github.io/yu-docs/en/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
              <Book className="w-4 h-4" />
              Docs
            </a>
            <a href="https://github.com/yu-org/yu" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Build Custom Blockchain
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Like Web Service
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A highly customizable blockchain framework. Modular architecture, very Easy-to-use, production-ready.  
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2" onClick={() => window.open('https://yu-org.github.io/yu-docs/en/', '_blank')}>
              <Book className="w-4 h-4" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => window.open('https://github.com/yu-org/yu', '_blank')}>
              <Github className="w-4 h-4" />
              View on GitHub
            </Button>
          </div>

          {/* Code Preview */}
          <div className="pt-8">
            <div className="rounded-lg border border-border/40 bg-secondary/30 p-6 text-left overflow-x-auto backdrop-blur-sm">
              <pre className="text-sm md:text-base"><code className="text-muted-foreground">{`type Example struct {
  *tripod.Tripod
}

func (e *Example) Transfer(ctx *context.WriteContext) error {
  // Set gas cost
  ctx.SetLei(100)  
  // Set State
  e.Set([]byte("key"), []byte("value"))
  // Emit Event
  ctx.EmitStringEvent("Transfer completed")
  return nil
}

func main() {
  startup.DefaultStartup(
    poa.NewPoa(poaConf),
    NewExample(),
  )
}`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Levels of Customization</h2>
            <p className="text-muted-foreground text-lg">From business logic to core components</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Code2 className="w-8 h-8" />}
              title="Business Logic"
              description="Define Writings (state changes) and Readings (queries) with simple function. Like smart contracts, but native."
            />
            <FeatureCard
              icon={<Puzzle className="w-8 h-8" />}
              title="Blockchain Lifecycle"
              description="Customize consensus algorithms, block validation, and chain initialization. PoA and PoW included."
            />
            <FeatureCard
              icon={<Boxes className="w-8 h-8" />}
              title="Core Components"
              description="Invoke block structures, P2P network, Txpool, storage backends, and state databases. Full control."
            />
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Use Cases</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureItem
              icon={<Code2 className="w-6 h-6" />}
              title="Multi-VM Compatible"
              description="Compatible with EVM, WASM, RISC-V and more"
            />
            <FeatureItem
              icon={<Puzzle className="w-6 h-6" />}
              title="Consensus Customization"
              description="Customize POA, POW and other consensus protocols"
            />
            <FeatureItem
              icon={<Boxes className="w-6 h-6" />}
              title="Account Customization"
              description="Customize UTXO, bank-style account models, and other customized account abstractions"
            />
            <FeatureItem
              icon={<Zap className="w-6 h-6" />}
              title="RPC Compatible"
              description="Compatible with web3js and other web3 RPC protocols"
            />
          </div>
        </div>
      </section>

      {/* Enterprise Users */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted in Production</h2>
            <p className="text-muted-foreground text-lg">Real companies building real blockchains</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <EnterpriseCard
              name="Reddio"
              description="Blockchain Infrastructure Provider"
              detail="Built high-performance, scalable L2 blockchain solutions"
              website="https://reddio.com/"
              twitter="https://twitter.com/reddio_com"
            />
            <EnterpriseCard
              name="AWresearch"
              description="Web3 Game Platform Chain"
              detail="Gaming platform blockchain for Web3 applications"
              website="https://awresearch.io/"
              twitter="https://twitter.com/awresearch"
            />
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/40 bg-secondary/30">
              <span className="text-sm text-muted-foreground">Partner:</span>
              <span className="font-semibold">Axiom</span>
              <span className="text-sm text-muted-foreground">— ZK Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-secondary/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Go 1.24+, 3 components to customize, unlimited possibilities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={() => window.open('https://yu-org.github.io/yu-docs/en/', '_blank')}>
              <Book className="w-4 h-4" />
              Read the Docs
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => window.open('https://github.com/yu-org/yu', '_blank')}>
              <Github className="w-4 h-4" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Yu Framework. Apache 2.0 License.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/yu-org/yu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://yu-org.github.io/yu-docs/en/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Book className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg border border-border/40 bg-secondary/30 backdrop-blur-sm hover:border-border transition-colors">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function EnterpriseCard({ name, description, detail, website, twitter }: { name: string; description: string; detail: string; website: string; twitter: string }) {
  return (
    <div className="p-6 rounded-lg border border-border/40 bg-secondary/30 backdrop-blur-sm hover:border-border transition-colors">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <p className="text-sm mb-4">{detail}</p>
      <div className="flex gap-3">
        <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          Website <ExternalLink className="w-3 h-3" />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          Twitter <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
