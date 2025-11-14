"use client"

import { Button } from "@/components/ui/button";
import { Github, Book, Boxes, Zap, Puzzle, Shield, Code2, Rocket, ExternalLink, Languages } from "lucide-react";

export default function ZhHome() {
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
            <a href="/" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
              <Languages className="w-4 h-4" />
              EN
            </a>
            <a href="https://yu-org.github.io/yu-docs/zh/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors flex items-center gap-1">
              <Book className="w-4 h-4" />
              文档
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/40 bg-secondary/50 text-sm text-muted-foreground">
            <Rocket className="w-4 h-4" />
            被 L2 构建者信赖
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            构建定制化区块链
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              真正能上线的那种
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            高度可定制的区块链框架。模块化架构，EVM 兼容，生产就绪。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2" onClick={() => window.open('https://yu-org.github.io/yu-docs/zh/', '_blank')}>
              <Book className="w-4 h-4" />
              快速开始
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => window.open('https://github.com/yu-org/yu', '_blank')}>
              <Github className="w-4 h-4" />
              查看源码
            </Button>
          </div>

          {/* Code Preview */}
          <div className="pt-8">
            <div className="rounded-lg border border-border/40 bg-secondary/30 p-6 text-left overflow-x-auto backdrop-blur-sm">
              <pre className="text-sm md:text-base"><code className="text-muted-foreground">{`type Example struct {
  *tripod.Tripod
}

func (e *Example) Transfer(ctx *context.WriteContext) error {
  ctx.SetLei(100)  // 设置 Gas 消耗
  e.Set([]byte("key"), []byte("value"))
  ctx.EmitStringEvent("转账完成")
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">三层定制化架构</h2>
            <p className="text-muted-foreground text-lg">从业务逻辑到核心组件</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Code2 className="w-8 h-8" />}
              title="业务逻辑层"
              description="定义 Writing（状态变更）和 Reading（查询），通过简单的函数签名实现。如同智能合约，但原生内置。"
            />
            <FeatureCard
              icon={<Puzzle className="w-8 h-8" />}
              title="生命周期层"
              description="自定义共识算法、区块验证和链初始化。内置 PoA 和 PoW 共识。"
            />
            <FeatureCard
              icon={<Boxes className="w-8 h-8" />}
              title="核心组件层"
              description="更换区块结构、存储后端（Pebble/TiKV/SQL）和状态数据库。完全掌控。"
            />
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureItem
              icon={<Zap className="w-6 h-6" />}
              title="EVM 兼容"
              description="完整的以太坊兼容性。部署 Solidity 合约，使用 MetaMask，支持 Uniswap V2。"
            />
            <FeatureItem
              icon={<Shield className="w-6 h-6" />}
              title="生产就绪"
              description="被 Reddio（L2 基础设施）和 AWresearch（Web3 游戏）采用。久经考验。"
            />
            <FeatureItem
              icon={<Puzzle className="w-6 h-6" />}
              title="鼎式架构"
              description="基于插件的系统。自由组合组件。一切皆为鼎（Tripod）。"
            />
            <FeatureItem
              icon={<Boxes className="w-6 h-6" />}
              title="灵活存储"
              description="多种后端支持：Pebble、BoltDB、TiKV、MySQL、PostgreSQL、SQLite。"
            />
          </div>
        </div>
      </section>

      {/* Enterprise Users */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">生产环境验证</h2>
            <p className="text-muted-foreground text-lg">真实公司构建真实区块链</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <EnterpriseCard
              name="Reddio"
              description="区块链基础设施提供商"
              detail="构建高性能、可扩展的 L2 区块链解决方案"
              website="https://reddio.com/"
              twitter="https://twitter.com/reddio_com"
            />
            <EnterpriseCard
              name="AWresearch"
              description="Web3 游戏平台链"
              detail="为 Web3 应用打造的游戏平台区块链"
              website="https://awresearch.io/"
              twitter="https://twitter.com/awresearch"
            />
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/40 bg-secondary/30">
              <span className="text-sm text-muted-foreground">合作伙伴：</span>
              <span className="font-semibold">Axiom</span>
              <span className="text-sm text-muted-foreground">— 零知识证明基础设施</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-secondary/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开始了吗？</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Go 1.24+，3 层可定制，无限可能
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={() => window.open('https://yu-org.github.io/yu-docs/zh/', '_blank')}>
              <Book className="w-4 h-4" />
              阅读文档
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
              © 2025 禹框架。Apache 2.0 许可证。
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/yu-org/yu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://yu-org.github.io/yu-docs/zh/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
          官网 <ExternalLink className="w-3 h-3" />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
          Twitter <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
