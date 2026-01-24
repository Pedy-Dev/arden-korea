import Hero from '@/components/home/Hero';
import Problem from '@/components/home/Problem';
import ValueCards from '@/components/home/ValueCards';
import ProductBlock from '@/components/home/ProductBlock';
import ProcessSteps from '@/components/home/ProcessSteps';
import Documents from '@/components/home/Documents';
import Reviews from '@/components/home/Reviews';
import ContactTeaser from '@/components/home/ContactTeaser';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <ValueCards />
      <ProductBlock />
      <ProcessSteps />
      <Documents />
      <Reviews />
      <ContactTeaser />
    </main>
  );
}
