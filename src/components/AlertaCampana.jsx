import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function AlertaCampana() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="secondary"
          className="text-palette4 border-2 border-palette4 font-bold"
        >
          descarga Alerta Campana
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <section className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text font-semibold">
              Desgarca Alerta Campana para tu Celular
            </h4>
            <p className="text-sm text-palette4">
              ¡IMPORTANTE! 👇 Ante cualquier hecho sospechoso, te pedimos que
              des aviso inmediato a través de la app Alerta Campana, disponible
              para su descarga gratuita en PlayStore y AppStore.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Municipalidad de Campana
              </span>
            </div>
          </div>
        </section>
      </HoverCardContent>
    </HoverCard>
  );
}
