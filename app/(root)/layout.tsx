import Header from '@/components/ui/Header'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="min-h-screeen text-gray-400">
      <Header />
      <div className="container py-10">
        {children}
      </div>
    </main>
  )
}

export default Layout