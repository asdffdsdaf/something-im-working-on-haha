
<script>
    import {Button, TextInput} from "carbon-components-svelte";
</script>
<style lang="scss">
    @import "@carbon/layout";
    tr {
        margin-top: $spacing-08;
    }
</style>
<div>
    <Button>123</Button>
    <tr style="margin-bottom: $spacing-08;">
        <h2 class="bx--type-productive-heading-04">
            <span>Log in</span>
        </h2>
        <p>
            <span>Don't have an account?</span>
            <a href="/register">Create an account</a>
        </p>
        
    </tr>
    <TextInput labelText="User name" placeholder="Enter user name..." />
</div>