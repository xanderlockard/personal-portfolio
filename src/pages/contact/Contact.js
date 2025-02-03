import { DialogContent, DialogHeader, Fieldset, Input, Textarea } from "@chakra-ui/react"
import { Field } from "../../components/ui/field"

const Contact = (props) => {
    return (
        <DialogContent>
            <DialogHeader>
                Contact Me
            </DialogHeader>
            <Fieldset.Root>
            <Fieldset.Legend>Contact Me</Fieldset.Legend>
            <Field label="Email">
                <Input name="email" />
            </Field>
            <Field label="Name">
                <Input name="name" />
            </Field>
            <Field label="Message">
                <Textarea name="message" />
            </Field>
        </Fieldset.Root>
        </DialogContent>
    )
}

export default Contact;