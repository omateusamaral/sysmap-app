import { useEffect } from "react";
import { useAsyncCallback } from "react-async-hook";
import { Button, Dialog, List, Portal } from "react-native-paper";
import { getUser } from "../../api";
import { ErrorDialog } from "../common/ErrorDialog";
import { Loader } from "../common/Loader";

export interface UserDialogProps {
  userId: number;
  visible: boolean;
  hideModal: () => void;
}
export function UserDialog({ userId, visible, hideModal }: UserDialogProps) {
  const getUserCallback = useAsyncCallback(getUser);
  useEffect(() => {
    getUserCallback.execute(userId);
  }, [userId]);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideModal}>
        {getUserCallback.loading ? (
          <Loader />
        ) : (
          <>
            <Dialog.Title>{getUserCallback.result?.name}</Dialog.Title>
            <Dialog.Content>
              <List.Section>
                <List.Subheader>Informações básica</List.Subheader>
                <List.Item
                  title={getUserCallback.result?.email}
                  left={() => <List.Icon icon="email" />}
                />
                <List.Item
                  title={getUserCallback.result?.phone}
                  left={() => <List.Icon icon="phone" />}
                />

                <List.Item
                  title={getUserCallback.result?.website}
                  left={() => <List.Icon icon="web" />}
                />
                <List.Subheader>Empresa</List.Subheader>
                <List.Item
                  title={getUserCallback.result?.company.name}
                  left={() => <List.Icon icon="office-building" />}
                />
                <List.Subheader>Endereço</List.Subheader>
                <List.Item
                  title={`${getUserCallback.result?.address.city} - ${getUserCallback.result?.address.street}`}
                  left={() => <List.Icon icon="city" />}
                />
              </List.Section>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideModal}>Fechar</Button>
            </Dialog.Actions>
            <ErrorDialog
              error={getUserCallback.error}
              hideDialog={getUserCallback.reset}
            />
          </>
        )}
      </Dialog>
    </Portal>
  );
}
