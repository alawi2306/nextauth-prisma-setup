// components/Hero.tsx
import Header from "@/components/header"
export default function Hero() {
  return (
    <div className="bg-white h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl my-auto pb-10 text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Revolutionizing Healthcare Management{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Optimize Your Medical Workflow with Precision
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform offers cutting-edge solutions for efficient patient management, streamlined operations, and advanced analytics. Discover how we can help transform your healthcare practice.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/register"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Request a Demo
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Explore Features <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
