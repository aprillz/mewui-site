using System.ComponentModel;
using System.Runtime.CompilerServices;

using Aprillz.MewUI;
using Aprillz.MewUI.Controls;

namespace MewUI.Site.Snippets;

// The view model types sit outside the landing region, so the page shows only
// the binding lines.
internal sealed class Customer : INotifyPropertyChanged
{
    private string _city = "";

    public event PropertyChangedEventHandler? PropertyChanged;

    public string City
    {
        get => _city;
        set
        {
            _city = value;
            OnPropertyChanged();
        }
    }

    private void OnPropertyChanged([CallerMemberName] string? name = null)
        => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
}

internal sealed class Order : INotifyPropertyChanged
{
    private Customer _customer = new();

    public event PropertyChangedEventHandler? PropertyChanged;

    public Customer Customer
    {
        get => _customer;
        set
        {
            _customer = value;
            OnPropertyChanged();
        }
    }

    private void OnPropertyChanged([CallerMemberName] string? name = null)
        => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
}

internal static class BindingExample
{
    public static StackPanel Build(Order order)
    {
        // <landing:binding>
        var percent = new ObservableValue<double>(
            initialValue: 0.25,
            coerce: value => Math.Clamp(value, 0, 1));

        var slider = new Slider()
            .BindValue(percent);

        var label = new Label()
            .BindText(percent, value => $"Percent ({value:P0})");

        // Nested path. Rewired when Customer is replaced.
        var city = new TextBlock()
            .Bind(TextBlock.TextProperty, order, x => x.Customer.City);
        // </landing:binding>

        return new StackPanel().Children(slider, label, city);
    }
}
