import { Modal } from "@/components/modal";

export default function RoutinesLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <Modal>
      {children}
      {modal}
    </Modal>
  );
}
