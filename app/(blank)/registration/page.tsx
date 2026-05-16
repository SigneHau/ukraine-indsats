import RegistrationManager from "@/components/RegistrationManager";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-5 md:py-5 px-4 overflow-y-auto overflow-x-hidden">
      <div className="w-full max-w-7xl">
        <RegistrationManager />
      </div>
    </main>
  );
}