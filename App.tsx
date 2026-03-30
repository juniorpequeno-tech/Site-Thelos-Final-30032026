import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NossasUnidades from "./pages/NossasUnidades.tsx";
import ProjetosThelos from "./pages/ProjetosThelos.tsx";
import Blog from "./pages/Blog.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import ProjetoMarcos from "./pages/ProjetoMarcos.tsx";
import ProjetoSalaInspiracao from "./pages/ProjetoSalaInspiracao.tsx";
import ProjetoAbrace from "./pages/ProjetoAbrace.tsx";
import ProjetoMulheresEmpoderadas from "./pages/ProjetoMulheresEmpoderadas.tsx";
import InclusaoEscolar from "./pages/InclusaoEscolar.tsx";
import ThelosEssencial from "./pages/ThelosEssencial.tsx";
import Contato from "./pages/Contato.tsx";
import ThelosNaMidia from "./pages/ThelosNaMidia.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nossas-unidades" element={<NossasUnidades />} />
          <Route path="/projetos-thelos" element={<ProjetosThelos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/servicos/:slug" element={<ServiceDetail />} />
          <Route path="/projeto-marcos" element={<ProjetoMarcos />} />
          <Route path="/projeto-sala-inspiracao" element={<ProjetoSalaInspiracao />} />
          <Route path="/projeto-abrace" element={<ProjetoAbrace />} />
          <Route path="/projeto-mulheres-empoderadas" element={<ProjetoMulheresEmpoderadas />} />
          <Route path="/inclusao-escolar" element={<InclusaoEscolar />} />
          <Route path="/thelos-essencial" element={<ThelosEssencial />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/thelos-na-midia" element={<ThelosNaMidia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
