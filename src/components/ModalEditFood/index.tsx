import { createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import Input from "../Input";

interface FoodProp {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface ModalEditProps {
  isOpen: boolean;
  setIsOpen(): void;
  handleUpdateFood(food: FoodProp): void;
  editingFood: FoodProp;
}

export const ModalEditFood = ({
  isOpen,
  setIsOpen,
  handleUpdateFood,
  editingFood,
}: ModalEditProps) => {
  const formRef = createRef();

  const handleSubmit = async (data: FoodProp) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" icon placeholder="Cole o link aqui" />

        <Input name="name" icon placeholder="Ex: Moda Italiana" />
        <Input name="price" icon placeholder="Ex: 19.90" />

        <Input name="description" icon placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
