import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const FeaturesPage = lazy(() => import('./pages/Features'))
const ContactPage = lazy(() => import('./pages/Contact'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorks'))
const TestimonialsPage = lazy(() => import('./pages/Testimonials'))
const PricingPage = lazy(() => import('./pages/Pricing'))
const DemoPage = lazy(() => import('./pages/Demo'))
const ThankYouPage = lazy(() => import('./pages/ThankYou'))

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<div className="py-8 text-center">Cargando...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
