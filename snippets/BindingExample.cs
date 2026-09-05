using Aprillz.MewUI;
using Aprillz.MewUI.Controls;

namespace MewUI.Site.Snippets;

internal static class BindingExample
{
    public static StackPanel Build()
    {
        // <landing:binding>
        var percent = new ObservableValue<double>(
            initialValue: 0.25,
            coerce: value => Math.Clamp(value, 0, 1));

        var slider = new Slider()
            .BindValue(percent);

        var label = new Label()
            .BindText(percent, value => $"Percent ({value:P0})");
        // </landing:binding>

        return new StackPanel().Children(slider, label);
    }
}
