import {Create, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, required} from 'react-admin'

export const LessonEdit = ()=>{
    return (
        <Edit>
            <SimpleForm>
                <TextInput source='id' validate={[required()]} label="id" />
                <TextInput source='title' validate={[required()]} label="Title" />
                <ReferenceInput source='unitId' reference='units'/>
                <NumberInput source='order' validate={[required()]} label="order" />
            </SimpleForm>
        </Edit>
    )
}