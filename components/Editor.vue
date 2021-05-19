<template>
    <div>
    <!-- Use the component in the right place of the template -->
        <tiptap-vuetify :value="value" :extensions="extensions" @input="$emit('input', arguments[0])"/>
    </div>
</template>
<script>
    // import the component and the necessary extensions
    import {
        TiptapVuetify,
        Heading,
        Bold,
        Italic,
        Paragraph,
        BulletList,
        OrderedList,
        ListItem,
        Link,
        HardBreak,
        HorizontalRule,
        History
    } from "tiptap-vuetify";
    export default {
        components: { TiptapVuetify },
        props: {
            value: {
                type: String,
                default: ``
            }
        },
        data: () => ({
            extensions: [
                History,
                [
                    Heading,
                    {
                        options: {
                            levels: [2, 3]
                        }
                    }
                ],
                Bold,
                Italic,
                // Underline,
                ListItem,
                BulletList,
                OrderedList,
                // Blockquote,
                Link,
                HorizontalRule,
                Paragraph,
                HardBreak
            ]
        })
    };
</script>