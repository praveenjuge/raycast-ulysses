import { Action, ActionPanel, Form, popToRoot } from "@raycast/api";
import { openUlyssesCallback } from "./utils";

interface Values {
  group_name: string;
}

export default function NewGroup() {
  async function handleSubmit(values: Values) {
    await openUlyssesCallback("ulysses://x-callback-url/new-group?name=" + encodeURIComponent(values.group_name));
    await popToRoot();
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Create Group" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="group_name" placeholder="Enter Group Name" title="Group Name" />
    </Form>
  );
}
