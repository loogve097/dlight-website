import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/** 404ページ */
export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg-primary">
      <Container className="text-center">
        <p className="text-accent-gold text-sm font-medium uppercase tracking-widest mb-4">
          404
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          ページが見つかりません
        </h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Button href="/">トップに戻る</Button>
      </Container>
    </section>
  );
}
