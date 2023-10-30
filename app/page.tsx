import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import EmptyState from './components/EmptyState';

export default function Home() {
  const isEmpty = true;

  if (isEmpty) {
    return <EmptyState />
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className="pt-2 
          grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
        >
          <div>listing</div>
        </div>
      </Container>
    </ClientOnly>
  );
}
